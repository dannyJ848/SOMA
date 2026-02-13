/**
 * Natural Disaster Preparedness
 *
 * Comprehensive guide to preparing for natural disasters including earthquakes,
 * hurricanes, tornadoes, floods, and wildfires. Covers emergency planning,
 * supply kits, communication strategies, and medical preparedness.
 */

import { EducationalContent } from '../types';

export const naturalDisasterPreparednessContent: EducationalContent = {
  id: 'topic-natural-disaster-preparedness',
  type: 'topic',
  name: 'Natural Disaster Preparedness',
  nameEs: 'Preparacion para Desastres Naturales',
  alternateNames: ['Emergency Preparedness', 'Disaster Readiness', 'Natural Hazard Planning', 'Emergency Survival Planning'],

  levels: {
    1: {
      level: 1,
      summary: 'Natural disasters like earthquakes, hurricanes, tornadoes, and floods can happen with little or no warning. Having a plan, an emergency kit, and knowing what to do during each type of disaster can save your life and the lives of your family.',
      explanation: `Natural disasters are powerful events in nature that can cause serious damage and put lives at risk. The good news is that being prepared BEFORE a disaster strikes makes a huge difference in staying safe.

**Think of disaster preparedness like a fire drill at school.** You practice what to do ahead of time so that when the real event happens, you do not have to stop and think — you already know exactly what to do. The same idea applies to all natural disasters.

**THE THREE PILLARS OF PREPAREDNESS:**

**1. HAVE A PLAN**

Every family should have a disaster plan that answers these questions:
- Where will we meet if we get separated?
  - Pick one meeting place near your home (like a neighbor's mailbox)
  - Pick a second meeting place outside your neighborhood (like a library or school)
- Who is our out-of-state contact person?
  - After a disaster, local phone lines may be jammed, but long-distance calls often still work
  - Choose a relative or friend in another state that everyone can call to check in with
- How will we get emergency alerts?
  - Sign up for local emergency alerts on your phone
  - Keep a battery-powered or hand-crank weather radio
- What are our evacuation routes?
  - Know at least two ways to leave your neighborhood
  - Practice driving or walking these routes
- Who in our family needs special help?
  - Babies, elderly family members, people with disabilities, and pets all need extra planning

**2. BUILD AN EMERGENCY KIT**

Pack a kit that can keep your family going for at least 72 hours (3 days). Store it somewhere easy to grab.

**Water** — the most important item:
- One gallon per person per day (3 gallons per person minimum)
- Do not forget water for pets

**Food** — things that do not need cooking or refrigeration:
- Canned goods (with a manual can opener)
- Granola bars, dried fruit, peanut butter, crackers
- Baby food or formula if needed

**First Aid Kit:**
- Bandages, gauze, adhesive tape
- Antibiotic ointment
- Pain relievers (acetaminophen, ibuprofen)
- Any prescription medications your family takes (keep a 7-day supply rotated)
- Copies of prescriptions

**Tools and Safety:**
- Flashlight with extra batteries
- Battery-powered or hand-crank radio
- Whistle (to signal for help)
- Dust masks
- Plastic sheeting and duct tape (for sheltering in place)
- Wrench or pliers (to turn off utilities)
- Cell phone chargers (battery-powered or solar)

**Personal Items:**
- Copies of important documents in a waterproof bag (ID, insurance, medical records)
- Cash in small bills (ATMs and credit cards may not work)
- Change of clothes and sturdy shoes for each person
- Blankets or sleeping bags
- Sanitation supplies (trash bags, hand sanitizer, moist towelettes)

**3. KNOW WHAT TO DO DURING EACH TYPE OF DISASTER**

**EARTHQUAKE:**
- **DROP, COVER, and HOLD ON**
- Drop to your hands and knees
- Take cover under a sturdy desk or table — protect your head and neck
- Hold on to your shelter and be prepared to move with it
- If there is no table nearby, cover your head and neck with your arms and crouch next to an interior wall
- Stay inside until the shaking stops — most injuries happen from people trying to run outside
- If you are outside, move to an open area away from buildings, trees, and power lines
- After shaking stops, be prepared for aftershocks

**HURRICANE:**
- If told to evacuate, LEAVE IMMEDIATELY — do not wait
- If sheltering at home, stay in an interior room away from windows
- Fill bathtubs with water for flushing toilets if water service is lost
- After the storm, stay away from floodwaters (may be contaminated or hide downed power lines)

**TORNADO:**
- Go to the lowest floor of a sturdy building
- Get to an interior room with no windows (bathroom, closet, hallway)
- Cover yourself with a mattress, heavy blankets, or get under a heavy table
- If in a car, do NOT try to outrun a tornado — get out and lie flat in a low ditch
- If in a mobile home, LEAVE and go to a sturdy building or lie flat in a low area

**FLOOD:**
- Never walk, swim, or drive through floodwater — "Turn Around, Don't Drown"
- Just 6 inches of moving water can knock you down
- Just 12 inches can carry away a car
- Move to higher ground immediately if flooding threatens
- After floods, do not drink tap water until authorities say it is safe

**WILDFIRE:**
- If told to evacuate, leave immediately
- Close all windows and doors, turn off gas
- Wear long sleeves, pants, and sturdy shoes
- Drive with headlights on and windows up through smoke
- If trapped, call 911, stay inside, seal doors with wet towels

**AFTER ANY DISASTER:**
- Check yourself and others for injuries
- Use your first aid kit to treat minor injuries
- Do not touch downed power lines
- Listen to your emergency radio for instructions
- Text rather than call — texts use less network capacity
- Be careful returning to damaged buildings
- Take photos of damage for insurance before cleaning up`,
      keyTerms: [
        { term: 'evacuation', definition: 'Leaving a dangerous area in an organized way to get to a safe location, usually ordered by local authorities during hurricanes, wildfires, or floods' },
        { term: 'shelter in place', definition: 'Staying inside a safe building during a disaster instead of leaving, often the best choice during tornadoes, earthquakes, and some chemical emergencies' },
        { term: 'emergency kit', definition: 'A collection of supplies packed ahead of time that can keep your family going for at least 72 hours during a disaster when normal services are not available' },
        { term: 'aftershock', definition: 'A smaller earthquake that happens after the main earthquake, sometimes hours, days, or even weeks later; can cause additional damage to weakened structures' },
        { term: 'flash flood', definition: 'A sudden, fast-moving flood that can happen within minutes of heavy rain, dam failure, or rapid snowmelt, often in areas that do not normally flood' },
      ],
      analogies: [
        'Disaster preparedness is like a fire drill at school — you practice ahead of time so you already know what to do when the real event happens.',
        'An emergency kit is like a life raft for your home — you hope you never need it, but if you do, it keeps you going until help arrives.',
        'Having two meeting places is like having a backup plan for a backup plan — if Plan A does not work, you automatically switch to Plan B.',
      ],
      examples: [
        'A family in Florida hears a hurricane warning. Because they already have a plan and a packed emergency kit, they evacuate in 30 minutes instead of scrambling for hours.',
        'During an earthquake in California, a student remembers Drop, Cover, and Hold On from school drills. She takes cover under her desk and avoids falling debris.',
        'After a tornado in Oklahoma, a family uses their emergency radio to learn about road closures and shelter locations when cell service is down.',
      ],
      patientCounselingPoints: [
        'Every family should have a written disaster plan with meeting places, an out-of-state contact, and evacuation routes.',
        'Build a 72-hour emergency kit with water (1 gallon per person per day), food, first aid supplies, and medications.',
        'Keep a 7-day supply of prescription medications in your emergency kit and rotate them regularly.',
        'During an earthquake: Drop, Cover, and Hold On. Do NOT run outside during shaking.',
        'Never walk or drive through floodwater — just 6 inches of moving water can knock you down, and 12 inches can carry a car.',
        'Sign up for local emergency alerts on your phone and keep a battery-powered weather radio.',
      ],
    },
    2: {
      level: 2,
      summary: 'Natural disaster preparedness encompasses all-hazards emergency planning, supply kit construction, communication strategies, and disaster-specific response protocols. Understanding vulnerability factors, community resources, and the phases of emergency management (mitigation, preparedness, response, recovery) creates comprehensive readiness for earthquakes, hurricanes, tornadoes, floods, wildfires, and other hazards.',
      explanation: `## Natural Disaster Preparedness: Complete Overview

### The Emergency Management Cycle

Emergency management follows a four-phase cycle:
1. **Mitigation**: Actions taken to prevent or reduce the impact of disasters (building codes, flood barriers, wildfire-resistant landscaping)
2. **Preparedness**: Planning, training, and resource accumulation before a disaster (emergency kits, family plans, drills)
3. **Response**: Actions during and immediately after a disaster (evacuation, search and rescue, emergency medical care)
4. **Recovery**: Long-term actions to restore normalcy (rebuilding, financial recovery, mental health support)

This content focuses primarily on phases 2 (Preparedness) and 3 (Response).

### Comprehensive Emergency Planning

**Family Communication Plan:**
- Designate an out-of-state contact — after a disaster, local networks are often overwhelmed but long-distance connections may work
- Program ICE (In Case of Emergency) contacts into all family members' phones
- Teach children how to call 911 and how to text (texts require less bandwidth than calls)
- Establish two reunion locations: one near home (for localized events) and one outside the neighborhood (for area-wide evacuations)
- Practice the plan with all family members twice per year

**Special Populations Planning:**
- **Infants and young children**: Extra formula, diapers, comfort items, car seat accessible
- **Elderly family members**: Medication lists, mobility aids, hearing aid batteries, copies of Medicare/insurance cards
- **People with disabilities**: Backup power for medical devices (oxygen, CPAP), accessible transportation arrangements, communication boards for non-verbal individuals
- **Pets**: Food, water, leash, carrier, vaccination records (most public shelters do not accept pets; identify pet-friendly shelters or boarding facilities in advance)

**Document Protection:**
Store copies of the following in a waterproof, fireproof container AND as digital scans (cloud storage or USB drive in emergency kit):
- Government-issued IDs (driver's license, passport)
- Insurance policies (home, auto, health, life)
- Medical records and prescription lists
- Bank and investment account information
- Property deeds, vehicle titles
- Family contact list with phone numbers and email addresses
- Photos of valuables for insurance claims

### Building a Tiered Supply System

**Tier 1 — Go Bag (15 minutes or less to evacuate):**
- Water: 1 liter per person
- Energy bars, ready-to-eat food
- Essential medications (3-day supply)
- Copies of critical documents
- Cash ($200 in small bills and coins)
- Phone charger (portable battery)
- Flashlight, whistle
- Sturdy shoes, weather-appropriate clothing
- N95 masks, work gloves

**Tier 2 — 72-Hour Kit (standard emergency kit):**
- Water: 1 gallon per person per day (3-day supply)
- Food: 3-day supply of non-perishable items
- Full first aid kit
- 7-day medication supply
- Full document copies
- Radio (hand-crank or battery-powered with NOAA Weather Band)
- Sanitation supplies (toilet bags, hand sanitizer, soap, trash bags)
- Tools (multi-tool, duct tape, wrench for utility shut-off)
- Sleeping bags or emergency blankets
- Change of clothes for each person

**Tier 3 — Extended Preparedness (2 weeks):**
- Water purification method (purification tablets, portable filter, or unscented household bleach — 8 drops per gallon for clear water)
- 2-week food supply with variety
- Camping stove with fuel (for outdoor use only)
- Extended medication supply
- Hygiene and morale items (books, cards, comfort items for children)

### Disaster-Specific Response Protocols

**Earthquake Response — During:**
- Indoor: Drop, Cover, Hold On under sturdy furniture. Protect head and neck.
- In bed: Stay in bed, cover head with pillow. Rolling onto the floor puts you in the path of falling debris.
- Outdoors: Move to open area. Drop to the ground.
- Driving: Pull over to the side of the road away from overpasses, bridges, power lines, and buildings. Stay in the vehicle.
- DO NOT stand in a doorway (common myth — doorways are no stronger than any other part of a modern home)

**Earthquake Response — After:**
- Expect aftershocks — Drop, Cover, Hold On each time
- Check for gas leaks (smell of rotten eggs). If detected, open windows, leave the building, and call the gas company from outside.
- Check for structural damage before re-entering buildings
- Do not use elevators
- Be cautious of broken glass, fallen objects, and damaged utilities

**Hurricane Preparedness and Response:**
- **72-48 hours before**: Review plan, check supplies, fuel vehicles, protect windows (plywood or hurricane shutters)
- **48-24 hours before**: Fill bathtubs and large containers with water, charge all devices, move outdoor furniture inside
- **Evacuation order**: Leave immediately. Take your Go Bag and 72-Hour Kit. Follow designated evacuation routes.
- **Sheltering in place**: Interior room, lowest floor, away from windows. Monitor weather radio.
- **Eye of the hurricane**: A period of calm does NOT mean the storm is over. Winds will return from the opposite direction.
- **After**: Avoid floodwaters, downed power lines, and damaged structures. Boil water until authorities confirm safety.

**Tornado Safety:**
- **Tornado Watch**: Conditions are favorable — be alert and review your plan
- **Tornado Warning**: A tornado has been spotted or detected on radar — take shelter IMMEDIATELY
- Best shelter: Basement or storm cellar. If unavailable: interior room on the lowest floor with no windows.
- In a high-rise building: Go to an interior hallway on the lowest floor possible. Avoid elevators.
- Mobile homes: Leave immediately and go to a substantial building or designated storm shelter.
- Outdoors with no shelter: Lie flat in the lowest area (ditch, ravine) and cover your head. Stay away from trees and cars.

**Flood Safety:**
- "Turn Around, Don't Drown": Never enter floodwaters on foot or in a vehicle
- 6 inches of moving water can knock down an adult
- 12 inches can float a small car; 18-24 inches can carry away an SUV or truck
- Move to higher ground before flooding reaches your location
- If trapped in a building by rising water, go to the highest floor. Signal for help from a window or roof. Do NOT go into an attic unless you have roof access (people have drowned trapped in attics).
- After flooding: Do not drink tap water until declared safe. Discard food that contacted floodwater. Wear protective gear during cleanup (mold exposure risk).

**Wildfire Safety:**
- Create defensible space: Clear vegetation 30 feet around your home, remove dead plants, trim tree branches up to 10 feet from the ground
- If ordered to evacuate: Leave immediately. Close all windows and doors. Turn off gas.
- Driving through smoke: Turn on headlights, drive slowly, close windows and vents, recirculate cabin air
- If trapped: Call 911. Stay inside a building. Move to a room with no exterior walls if possible. Close all doors and seal with wet towels. Fill sinks and tubs with water.
- After: Watch for hot spots and smoldering debris. Do not enter burned structures until cleared by authorities. Be aware of increased flash flood risk in burned areas for months afterward.

### Medical Preparedness

**First Aid Kit Enhancement for Disasters:**
- Standard first aid supplies (bandages, gauze, tape, antiseptic)
- Trauma supplies: Tourniquet, hemostatic gauze, emergency blanket
- SAM splint or improvised splinting materials
- OTC medications: Pain relievers, antihistamines, anti-diarrheal, antacids
- Personal medications: Minimum 7-day supply (ideally 30-day), stored with prescription information
- Water purification tablets
- Sunscreen, insect repellent
- Medical information cards for each family member (allergies, conditions, medications, blood type)

**When Professional Medical Help is Delayed:**
- Triage: Assess the most seriously injured first
- Control bleeding with direct pressure and elevation; use tourniquets only for life-threatening limb hemorrhage
- Immobilize suspected fractures with improvised splints
- Treat shock: Lay the person flat, elevate legs if no spinal injury suspected, keep warm
- Clean wounds with the cleanest water available; apply antibiotic ointment and bandage
- Monitor for signs of infection in wounds (increasing redness, warmth, swelling, pus)`,
      keyTerms: [
        { term: 'emergency management cycle', definition: 'The four-phase framework for disaster management: mitigation (reducing impact), preparedness (planning and supply), response (actions during and immediately after), and recovery (long-term restoration)' },
        { term: 'Go Bag', definition: 'A pre-packed bag containing essential survival items designed to be grabbed within 15 minutes during a rapid evacuation, including water, food, medications, documents, and basic tools' },
        { term: 'defensible space', definition: 'A zone of cleared vegetation and fire-resistant landscaping around a home, typically 30-100 feet, that reduces wildfire risk by removing fuel and creating a buffer between the structure and advancing flames' },
        { term: 'NOAA Weather Radio', definition: 'A nationwide network of radio stations broadcasting continuous weather information and emergency alerts directly from the National Weather Service, essential for receiving warnings during power outages' },
        { term: 'triage', definition: 'The process of sorting injured people by the severity of their condition to prioritize who receives treatment first, especially important when medical resources are limited during disasters' },
        { term: 'Turn Around Don\'t Drown', definition: 'A National Weather Service campaign warning that just 6 inches of moving water can knock down an adult and 12 inches can carry away a car, making floodwater crossing extremely dangerous' },
      ],
      patientCounselingPoints: [
        'Keep a minimum 7-day supply of all prescription medications in your emergency kit and rotate before expiration.',
        'Store copies of medical records, prescription lists, and insurance information in a waterproof container in your kit.',
        'If you depend on electricity for medical devices (oxygen, CPAP, dialysis), have a backup power plan such as a generator or battery system.',
        'After a disaster, tap water may be contaminated — use stored water or purify water with bleach (8 drops per gallon) or purification tablets until officials confirm safety.',
        'Learn basic first aid and CPR — during disasters, professional medical help may be delayed for hours or days.',
        'Identify your nearest community emergency shelters and know which are pet-friendly and accessible for people with disabilities.',
      ],
    },
    3: {
      level: 3,
      summary: 'Disaster preparedness integrates risk assessment, hazard vulnerability analysis, public health infrastructure, and evidence-based emergency management principles. Understanding disaster epidemiology, the medical response framework (incident command system), mass casualty triage, and the specific injury patterns and public health threats associated with each disaster type enables effective individual, community, and institutional preparedness.',
      explanation: `## Natural Disaster Preparedness: College-Level Analysis

### Disaster Epidemiology

**Global Burden:**
- Natural disasters affect approximately 160 million people annually worldwide
- Over the past 20 years, more than 1.2 million people have died from natural disasters
- Climate change is increasing the frequency and severity of weather-related disasters (floods, hurricanes, heat waves, wildfires)
- Economic losses from natural disasters exceed $300 billion annually

**Mortality Patterns by Disaster Type:**
- **Earthquakes**: Crushing injuries (building collapse), traumatic asphyxia, dust inhalation. 85-90% of deaths from building collapse. Survival decreases dramatically after 24-72 hours under rubble.
- **Hurricanes/Cyclones**: Drowning (storm surge accounts for ~50% of deaths), blunt trauma from flying debris and structural collapse, electrocution from downed power lines
- **Tornadoes**: Blunt trauma from flying debris (most common cause of death and injury), building collapse, motor vehicle injuries
- **Floods**: Drowning (the primary cause, especially in vehicles), hypothermia, trauma. Flash floods are the most lethal flood type.
- **Wildfires**: Burns, smoke inhalation, respiratory illness. Firefighter fatalities from entrapment, cardiac events, and vehicle accidents.

**Morbidity Patterns:**
- Immediate: Trauma (fractures, lacerations, crush injuries), burns, drowning, hypothermia
- Short-term (days to weeks): Infectious disease outbreaks (waterborne: cholera, typhoid, hepatitis A; vector-borne: mosquito proliferation in standing water), respiratory illness (mold, dust, smoke), carbon monoxide poisoning (generators used indoors)
- Long-term (months to years): PTSD (30-40% prevalence in disaster survivors), depression, substance abuse, chronic respiratory disease, delayed infrastructure recovery

### The Incident Command System (ICS)

The ICS is the standardized emergency management framework used in the United States:

**Key Principles:**
- **Unified command**: Single incident commander or unified command structure with clear chain of authority
- **Modular organization**: Expandable from small incidents to mass casualty events
- **Manageable span of control**: Each supervisor manages 3-7 subordinates
- **Comprehensive resource management**: Tracking of all personnel, equipment, and supplies

**ICS Structure:**
- Command: Incident Commander, Public Information Officer, Safety Officer, Liaison Officer
- Operations: Directs tactical operations (search and rescue, firefighting, medical)
- Planning: Collects and analyzes situation information, develops action plans
- Logistics: Provides resources, facilities, transportation, supplies, food
- Finance/Administration: Tracks costs, contracts, compensation

**Medical Branch within ICS:**
- Triage: Sorting casualties by severity
- Treatment: Providing emergency medical care at the scene
- Transport: Moving patients to appropriate medical facilities
- Staging: Organizing ambulances and medical teams for deployment

### Mass Casualty Triage Systems

**START Triage (Simple Triage and Rapid Treatment):**
Used in the field to rapidly sort large numbers of casualties:

1. **Walking wounded**: Anyone who can walk is tagged GREEN (Minor — delayed treatment okay)
2. **Assess remaining victims in 30-second evaluations:**
   - Check respirations:
     - Not breathing after repositioning airway → BLACK (Expectant/Dead)
     - Breathing > 30/min → RED (Immediate)
     - Breathing < 30/min → Continue assessment
   - Check perfusion (radial pulse or capillary refill):
     - No radial pulse OR capillary refill > 2 seconds → RED (Immediate)
     - Radial pulse present AND capillary refill < 2 seconds → Continue assessment
   - Check mental status:
     - Cannot follow simple commands → RED (Immediate)
     - Can follow simple commands → YELLOW (Delayed)

**JumpSTART Triage** (pediatric version):
- Modified for children under 8
- Includes rescue breathing step for apneic children (5 breaths — if no breathing resumes, BLACK; if breathing resumes, RED)
- Uses different respiratory rate thresholds appropriate for children

### Hazard Vulnerability Analysis (HVA)

HVA is a systematic approach to identifying and prioritizing community risks:

**Components:**
1. **Hazard identification**: Catalog all potential threats based on geography, climate, and history
2. **Probability assessment**: Likelihood of each hazard occurring (historical data, climate projections)
3. **Impact assessment**: Potential severity (human impact, property damage, infrastructure disruption, business continuity)
4. **Preparedness evaluation**: Current capacity to respond (resources, training, infrastructure)
5. **Risk prioritization**: Focus resources on highest-risk hazards

**Regional Hazard Profiles (United States):**
- Pacific Coast: Earthquakes, tsunamis, wildfires, landslides
- Gulf Coast and Southeast: Hurricanes, flooding, tornadoes, heat waves
- Midwest (Tornado Alley): Tornadoes, severe storms, flooding, blizzards
- Northeast: Nor'easters, flooding, blizzards, heat waves
- Mountain West: Wildfires, earthquakes, flooding, winter storms

### Water Security in Disasters

**Water Contamination Risks:**
- Floodwater infiltration of water treatment facilities
- Damaged water mains allowing backflow of contaminated groundwater
- Power outages disabling water treatment and pumping systems
- Well water contamination from surface runoff

**Water Purification Methods (When Safe Water Is Unavailable):**
1. **Boiling**: Bring to a rolling boil for 1 minute (3 minutes above 6,500 feet elevation). Most reliable method.
2. **Chemical disinfection**:
   - Household bleach (5-6% sodium hypochlorite): 8 drops per gallon of clear water; 16 drops for cloudy water. Wait 30 minutes.
   - Iodine tablets: Follow package directions. Not recommended for pregnant women, those with thyroid disease, or for long-term use.
3. **Filtration**: Portable filters rated for bacteria and protozoa (0.2 micron or smaller). Does NOT remove viruses — combine with chemical disinfection for comprehensive treatment.
4. **UV treatment**: SteriPEN-type devices for clear water. Battery-dependent.

### Shelter and Structural Safety

**Post-Earthquake Building Assessment:**
- Do NOT re-enter buildings until inspected
- Look for obvious structural damage: Shifted foundations, cracked walls, leaning columns
- Check utilities: Gas leaks (smell), water damage, electrical hazards
- ATC-20 (Applied Technology Council) rapid evaluation system:
  - GREEN: Inspected — lawful occupancy
  - YELLOW: Restricted use — specific areas or conditions
  - RED: Unsafe — do not enter

**Hurricane-Resistant Construction:**
- Impact-resistant windows or shutters
- Reinforced roof-to-wall connections (hurricane clips)
- Elevated construction in flood-prone areas (above base flood elevation)
- Wind-rated garage doors (often the first failure point)

### Psychological Preparedness

**Normal Stress Reactions in Disasters:**
- Fear, anxiety, hypervigilance
- Sleep disturbance, nightmares
- Irritability, anger, difficulty concentrating
- Physical symptoms: Headaches, stomach problems, fatigue
- These are NORMAL responses that usually resolve within weeks

**Warning Signs of PTSD or Prolonged Distress:**
- Symptoms persisting beyond 4-6 weeks
- Flashbacks, avoidance of reminders, emotional numbing
- Inability to function at work, school, or in relationships
- Increased substance use
- Suicidal thoughts

**Psychological First Aid (PFA):**
- Contact and engagement: Approach respectfully, offer help
- Safety and comfort: Ensure physical safety, provide basic needs
- Stabilization: Calm overwhelmed individuals (grounding techniques)
- Information gathering: Assess needs and concerns
- Practical assistance: Connect to services and resources
- Social support: Help re-establish contact with family and support networks
- Coping information: Normalize reactions, provide coping strategies
- Referral: Connect with mental health services when needed`,
      keyTerms: [
        { term: 'Hazard Vulnerability Analysis (HVA)', definition: 'A systematic method for identifying, evaluating, and prioritizing potential threats to a community based on probability, potential impact, and current preparedness capacity, used to allocate emergency management resources effectively' },
        { term: 'START triage', definition: 'Simple Triage and Rapid Treatment — a mass casualty triage system that uses 30-second assessments of respiration, perfusion, and mental status to categorize victims as Immediate (RED), Delayed (YELLOW), Minor (GREEN), or Expectant (BLACK)' },
        { term: 'Incident Command System (ICS)', definition: 'The standardized hierarchical emergency management framework used in the United States that provides a unified command structure, modular organization, and comprehensive resource management for incidents of any size' },
        { term: 'Psychological First Aid (PFA)', definition: 'An evidence-informed approach to helping disaster survivors that focuses on safety, stabilization, practical assistance, social support, and connection to services rather than psychological debriefing or forced emotional processing' },
        { term: 'base flood elevation (BFE)', definition: 'The predicted water surface level during a 100-year flood event (1% annual chance), used to set minimum building elevation requirements in flood-prone areas' },
        { term: 'storm surge', definition: 'An abnormal rise in seawater level during a hurricane caused by the storm\'s winds and low atmospheric pressure, responsible for approximately 50% of hurricane-related deaths' },
      ],
    },
    4: {
      level: 4,
      summary: 'Graduate-level disaster preparedness integrates public health emergency preparedness frameworks (PHEP capabilities), healthcare system surge capacity planning, medical countermeasure distribution strategies, and disaster-specific clinical challenges including crush syndrome, blast injuries, smoke inhalation, and communicable disease threats. Understanding the medical infrastructure vulnerabilities and the epidemiological approach to disaster response is essential for healthcare professionals who may serve in disaster response roles.',
      explanation: `## Natural Disaster Preparedness: Graduate-Level Detail

### Public Health Emergency Preparedness (PHEP) Capabilities

The CDC defines 15 PHEP capabilities that form the foundation of public health preparedness:

**Core Capabilities Relevant to Natural Disasters:**
1. **Community preparedness**: Engaging communities in planning, building social resilience
2. **Emergency operations coordination**: Activating and managing EOCs
3. **Emergency public information and warning**: Risk communication, alert systems
4. **Fatality management**: Mass fatality operations, victim identification, family assistance
5. **Mass care**: Sheltering, feeding, distribution of emergency supplies
6. **Medical countermeasure dispensing and administration**: Including mass prophylaxis and vaccination
7. **Medical surge**: Healthcare system expansion to accommodate disaster-related patient volumes
8. **Public health surveillance and epidemiological investigation**: Outbreak detection, disease monitoring
9. **Responder safety and health**: Protecting response workers from occupational hazards

### Healthcare System Surge Capacity

**Surge Capacity Components:**
- **Staff**: Activating off-duty personnel, medical reserve corps, mutual aid agreements
- **Stuff**: Equipment, medications, supplies, personal protective equipment
- **Structure**: Physical space expansion (corridor care, tents), alternate care sites (convention centers, schools)
- **Systems**: Command structure, communication, patient tracking, resource management

**Stages of Medical Surge:**
1. **Conventional capacity**: Standard operations with existing resources
2. **Contingency capacity**: Functionally equivalent care using adaptive strategies (cancel elective procedures, early discharge, resource substitution)
3. **Crisis capacity**: Standards of care shift — crisis standards of care (CSC) involve allocation of scarce resources using ethical frameworks and triage protocols

**Crisis Standards of Care (CSC):**
- Activated when resources are insufficient to maintain usual standards
- Ethical framework: Fairness, duty to care, duty to steward resources, transparency, consistency, proportionality, accountability
- Resource allocation protocols for ventilators, ICU beds, blood products, medications
- SOFA score (Sequential Organ Failure Assessment) and similar tools used for triage allocation decisions

### Disaster-Specific Clinical Challenges

**Crush Syndrome (Traumatic Rhabdomyolysis):**
Common in earthquakes (building collapse) and structural failures:
- **Pathophysiology**: Prolonged compression (> 1 hour) causes muscle ischemia. Upon extrication and reperfusion, damaged muscle releases myoglobin, potassium, phosphate, and uric acid into the systemic circulation.
- **Hyperkalemia**: The immediate threat — can cause fatal cardiac arrhythmia within minutes to hours of extrication
- **Myoglobinuria**: Myoglobin precipitates in renal tubules, causing acute kidney injury
- **Field management protocol (initiated BEFORE extrication if possible)**:
  - Start IV normal saline (1-1.5 L/hour) before releasing the compressive force
  - Cardiac monitor for arrhythmias
  - If hyperkalemia suspected (peaked T waves, wide QRS): Calcium gluconate 10% — 10 mL IV for cardioprotection
  - Sodium bicarbonate in IV fluids to alkalinize urine (prevents myoglobin precipitation)
  - Target urine output > 200 mL/hour
  - DO NOT apply tourniquets to crushed limbs unless active hemorrhage
  - Be prepared for sudden cardiovascular collapse upon extrication (reperfusion syndrome)

**Blast Injuries:**
While more common in explosions, understanding blast physics applies to natural disasters (gas explosions, volcanic eruptions):
- **Primary blast injury**: Pressure wave damage to air-filled organs (lungs: blast lung; ears: tympanic membrane rupture; GI: bowel perforation)
- **Secondary**: Penetrating trauma from flying debris (most common cause of death)
- **Tertiary**: Blunt trauma from body being thrown
- **Quaternary**: Burns, crush injuries, inhalation injury, exacerbation of chronic diseases

**Smoke and Particulate Inhalation (Wildfire):**
- Wildfire smoke contains PM2.5 (fine particulate matter), CO, polycyclic aromatic hydrocarbons, and volatile organic compounds
- Acute effects: Bronchospasm, airway irritation, exacerbation of COPD/asthma
- Short-term exposure associated with increased emergency department visits for respiratory and cardiovascular events
- N95 respirators provide protection (surgical masks do NOT adequately filter PM2.5)
- Vulnerable populations: Children, elderly, those with pre-existing cardiopulmonary disease, outdoor workers

**Waterborne Disease Threats Post-Flood:**
- **Bacterial**: Leptospirosis (from contact with contaminated floodwater), Vibrio (particularly V. vulnificus in coastal flood areas — wound infections with high mortality), E. coli, Shigella
- **Viral**: Hepatitis A (fecal-oral contamination), norovirus (shelter outbreaks)
- **Parasitic**: Cryptosporidium, Giardia
- **Mold**: Extensive mold growth in flooded buildings begins within 24-48 hours; associated with respiratory symptoms, allergic reactions, and rarely invasive fungal infections in immunocompromised individuals

### Medical Supply Chain Vulnerability

**Critical Medication Shortages in Disasters:**
- Insulin: Temperature-sensitive, requires refrigeration (at-risk during power outages)
  - Patient guidance: Insulin can be stored at room temperature (< 86 degrees F) for up to 28 days once opened; discard if exposed to extreme heat or freezing
- Dialysis: Dialysis centers may be damaged or without power; patients require emergent transfer to functioning facilities
- Oxygen: Home oxygen patients are at risk during power outages and evacuations
- Psychiatric medications: Abrupt discontinuation of SSRIs, benzodiazepines, and antiepileptics carries significant risks

**Strategic National Stockpile (SNS):**
- Federal cache of medications, vaccines, medical supplies, and equipment
- Can be deployed within 12 hours to any location in the United States
- Contents include antibiotics, antidotes, antitoxins, chemical/nerve agent antidotes, ventilators, and personal protective equipment
- Managed by CDC's Division of Strategic National Stockpile

### Infrastructure Vulnerability Assessment

**Hospital Preparedness:**
- Emergency power: Generators with minimum 96 hours of fuel
- Water supply: Emergency water reserves or purification capability
- Structural resiletal: Seismic codes for earthquake zones, wind resistance for hurricane zones
- Evacuation plans: Full hospital evacuation capability (both horizontal and vertical)
- Communication redundancy: Satellite phones, ham radio, interoperable radio systems
- Decontamination: External decontamination facilities for chemical/radiological events

**Communication System Resilience:**
- Cell towers have limited battery backup (typically 4-8 hours)
- Landline phone systems are more resilient than cellular (powered through copper lines)
- Amateur (ham) radio: Often the last communication system standing; ARES/RACES volunteer networks provide emergency communications
- FEMA's Integrated Public Alert and Warning System (IPAWS): Multi-channel alert distribution (wireless emergency alerts, Emergency Alert System, NOAA Weather Radio)`,
      keyTerms: [
        { term: 'crush syndrome', definition: 'A systemic condition resulting from prolonged muscle compression and subsequent reperfusion, characterized by hyperkalemia, myoglobinuria, acute kidney injury, and potential cardiac arrest upon extrication; requires pre-extrication IV fluid resuscitation' },
        { term: 'crisis standards of care (CSC)', definition: 'A formal declaration that activates allocation frameworks for scarce medical resources when disaster-related demand exceeds conventional and contingency capacity, using ethical principles and clinical scoring to guide triage decisions' },
        { term: 'Strategic National Stockpile (SNS)', definition: 'A federally managed national repository of medications, vaccines, medical supplies, and equipment that can be deployed within 12 hours to support local and state response during public health emergencies' },
        { term: 'surge capacity', definition: 'The ability of a healthcare system to expand beyond normal operating capacity to meet a sudden increase in patient volume, encompassing staff, supplies, physical space, and management systems' },
        { term: 'SOFA score', definition: 'Sequential Organ Failure Assessment — a clinical scoring system that evaluates dysfunction in six organ systems (respiratory, coagulation, liver, cardiovascular, neurological, renal), used in crisis standards of care to guide resource allocation decisions' },
        { term: 'Vibrio vulnificus', definition: 'A gram-negative bacterium found in warm coastal waters that causes rapidly progressive wound infections and septicemia, particularly in immunocompromised individuals; associated with floodwater exposure in coastal areas with high mortality rates' },
      ],
      clinicalNotes: `Graduate-level clinical notes:

1. **Crush syndrome management**: The critical window is BEFORE extrication. If IV access can be established while the patient is still trapped, begin aggressive normal saline infusion (1-1.5 L/hour) before releasing the compressive force. Hyperkalemia upon reperfusion is the immediate killer.

2. **Disaster triage differs from everyday triage**: In mass casualty situations, the goal shifts from "doing the most for each patient" to "doing the most good for the most people." This means patients with very severe injuries who would consume enormous resources with low survival probability may be categorized as Expectant (BLACK) — a difficult but necessary decision.

3. **Carbon monoxide poisoning after disasters**: Generator misuse indoors is the leading cause of CO poisoning deaths after hurricanes, ice storms, and power outages. Educate patients: Generators must be operated outdoors, at least 20 feet from any opening (doors, windows, vents).

4. **Medication continuity in disaster**: Healthcare providers should help patients maintain a disaster medication supply. Insurers are increasingly required to allow early refills (emergency prescription refill programs) during declared disasters. Many states have emergency prescription authority laws allowing pharmacists to dispense limited supplies without a new prescription.

5. **Mold remediation after flooding**: Any porous material (drywall, carpet, insulation) that was submerged should be removed and replaced. Non-porous surfaces can be cleaned with a bleach solution. Individuals with respiratory conditions or immunosuppression should not participate in mold cleanup.

6. **Psychological impact is the largest public health consequence of most disasters.** The number of people with significant psychological effects typically exceeds physical injuries by 10:1 or more. Psychological First Aid should be integrated into all disaster response plans.`,
    },
    5: {
      level: 5,
      summary: 'Professional-level disaster preparedness encompasses the evolving landscape of climate-driven disaster medicine, precision public health approaches to disaster preparedness, healthcare resilience engineering, advanced operational concepts (medical intelligence, predictive analytics), and the integration of emerging technologies (AI triage, telemedicine, drone delivery) into disaster medical response. The intersection of One Health, climate science, and disaster medicine defines the frontier of the field.',
      explanation: `## Natural Disaster Preparedness: Professional-Level Comprehensive Review

### Climate Change and the Evolving Disaster Landscape

**Evidence-Based Projections:**
- IPCC Sixth Assessment Report: Compound extreme events (simultaneous disasters) increasing in frequency
- Hurricane intensification: Rapid intensification events (>30 kt increase in 24 hours) have increased, attributed to warmer sea surface temperatures
- Wildfire: Fire weather seasons have lengthened by 25% globally since 1979; the area burned annually is projected to increase 50-100% by 2050 in many regions
- Flooding: The 100-year flood is now occurring every 25-50 years in many watersheds due to increased precipitation intensity
- Compound events: Heat waves + drought + wildfire sequences; hurricane + flooding + chemical release cascading disasters

**Climate-Informed Disaster Medicine:**
- Hazard vulnerability analyses must incorporate climate projections, not just historical data
- Infrastructure design standards (building codes, flood maps, hospital siting) must be updated for future conditions, not historical baselines
- Vector-borne disease expansion: Warming temperatures expand the range of Aedes mosquitoes (dengue, Zika, chikungunya) into previously temperate zones; disaster-related standing water amplifies breeding
- Heat-health nexus: Urban heat islands + aging population + disaster-disrupted cooling infrastructure = compounded heat-related mortality during power outages

### Precision Public Health in Disaster Preparedness

**Social Vulnerability Mapping:**
- CDC's Social Vulnerability Index (SVI) quantifies community vulnerability based on 16 census variables across 4 themes: socioeconomic status, household characteristics and disability, minority status and language, and housing type and transportation
- SVI-informed preparedness: Target pre-disaster interventions (supply distribution, evacuation assistance, multilingual communication) to highest-vulnerability areas
- Evidence: SVI correlates with disaster mortality, delayed recovery, and disease outbreak risk

**Geospatial Analytics for Preparedness:**
- LiDAR-based flood modeling: Centimeter-resolution elevation data for precise inundation mapping
- Wildfire risk modeling: Fuel load mapping, weather modeling, and fire behavior prediction (FARSITE, FlamMap)
- Earthquake early warning: ShakeAlert system provides seconds to tens of seconds of warning before seismic waves arrive; integrated with automated safety responses (gas shutoff, elevator stop, industrial process shutdown)
- Real-time syndromic surveillance: Emergency department chief complaint data analyzed for anomalous patterns that may indicate disease outbreaks following disasters

### Healthcare Resilience Engineering

**Beyond Surge Capacity — System Resilience:**
The concept of resilience extends beyond surge capacity (the ability to absorb) to include:
- **Absorptive capacity**: Handle increased demand with existing resources
- **Adaptive capacity**: Modify operations to maintain essential functions (cancel electives, convert ORs to ICUs, deploy field hospitals)
- **Transformative capacity**: Fundamentally restructure care delivery (crisis standards of care, alternate care sites, regional load-balancing)

**Hospital Continuity of Operations Planning (COOP):**
- Essential function identification: Which hospital functions must continue regardless of disaster conditions?
- Dependency mapping: What does each essential function depend on (power, water, supplies, specific staff)?
- Vulnerability analysis: Single points of failure for each dependency
- Mitigation strategies: Redundancy, stockpiling, mutual aid agreements, alternative delivery modes

**Regional Healthcare Coalition Model:**
- Hospitals within a region form coalitions for mutual support
- Shared resource inventories and request/allocation protocols
- Patient load-balancing: Distribute patients across the region rather than overwhelming individual facilities
- Shared situational awareness platforms: Real-time bed availability, resource status, patient tracking
- ASPR (Administration for Strategic Preparedness and Response) Hospital Preparedness Program supports coalition development

### Advanced Operational Concepts

**Medical Intelligence and Predictive Analytics:**
- Pre-disaster health surveillance: Identify populations with medication dependencies, home medical equipment needs, and mobility limitations before a disaster strikes
- Predictive modeling for medical demand: Based on disaster type, magnitude, population density, building construction, and time of day, estimate the injury severity distribution and medical resource requirements
- Machine learning models trained on historical disaster medical data can predict hospital surge timing and magnitude with increasing accuracy

**Telemedicine in Disaster Response:**
- Remote triage support: Specialists guide field responders via video consultation
- Forward triage: Patients in shelters or field aid stations assessed by remote physicians, reducing unnecessary emergency department visits
- Continuity of care: Chronic disease management for evacuees through telehealth
- Behavioral health: Tele-mental health for disaster survivors, reducing the access gap in mental health services
- Regulatory frameworks: Interstate licensure compacts and emergency waivers enable out-of-state providers to deliver telehealth across state lines during declared emergencies

**Drone and Autonomous Systems:**
- Medical supply delivery to isolated communities (insulin, medications, blood products)
- Aerial damage assessment and search-and-rescue support
- Communication relay in areas with destroyed cell infrastructure
- Challenges: Regulatory (FAA beyond-visual-line-of-sight restrictions), payload limitations, weather dependency

### Disaster Forensic Medicine and Mass Fatality Management

**Disaster Victim Identification (DVI):**
- Interpol DVI protocol: Four primary identifiers — fingerprints, dental records, DNA, unique medical identifiers (implants, prosthetics)
- DNA identification: Rapid DNA technology can produce profiles in under 2 hours (vs. days for conventional methods)
- Family Assistance Centers (FAC): Centralized locations for collecting ante-mortem data from families of missing persons and providing psychological support
- Ethical challenges: Commingled remains (blast, fire, structural collapse), cultural and religious considerations for handling remains

**Mass Fatality Surge:**
- Portable morgue units (Disaster Portable Morgue Units — DPMU) deployable by federal assets
- Temporary interment protocols when mortuary capacity is exceeded
- Electronic tracking systems for chain of custody

### One Health and Disaster Preparedness

**The Intersection of Human, Animal, and Environmental Health:**
- Zoonotic disease emergence after disasters: Displacement of wildlife into human habitats, disruption of veterinary services, proliferation of disease vectors
- Livestock and agriculture: Disaster damage to agricultural infrastructure affects food security, water quality (agricultural runoff), and zoonotic disease transmission
- Environmental contamination: Industrial facilities damaged in disasters release hazardous materials; Superfund site flooding disperses toxic contaminants
- Antimicrobial resistance: Disruption of sanitation and healthcare infrastructure, combined with empiric antibiotic use, can accelerate AMR emergence

### Ethical Frameworks in Disaster Medicine

**Resource Allocation Under Scarcity:**
- Utilitarian framework: Maximize the total number of lives saved (or life-years, or quality-adjusted life-years)
- Egalitarian framework: Equal chance for all regardless of social status, utility, or prognosis
- Prioritarian framework: Give priority to the worst-off
- Most crisis standards of care protocols use a modified utilitarian approach weighted by clinical factors (likelihood of survival, potential life-years saved) while incorporating safeguards against discrimination

**The Duty to Care vs. Self-Preservation:**
- Healthcare workers have an ethical obligation to provide care during disasters, but this duty is not unlimited
- Reciprocity: Institutions have obligations to protect their workers (PPE, training, family support)
- The concept of "proportionality": The duty to respond is proportional to the healthcare worker's role, training, and the availability of protective measures

**Equity in Disaster Response:**
- Historically marginalized communities experience disproportionate disaster impacts (Hurricane Katrina, COVID-19)
- Pre-existing health disparities are amplified by disasters
- Equitable preparedness requires proactive investment in vulnerable communities, not just equitable response after the event`,
      keyTerms: [
        { term: 'Social Vulnerability Index (SVI)', definition: 'A CDC-developed geospatial tool that uses 16 census variables across four themes to quantify community vulnerability to disasters, enabling targeted pre-disaster intervention and resource allocation to highest-risk populations' },
        { term: 'healthcare resilience', definition: 'The capacity of a healthcare system to absorb increased demand, adapt operations under stress, and transform care delivery when conventional and contingency strategies are insufficient, extending beyond simple surge capacity to encompass system-level robustness' },
        { term: 'crisis standards of care', definition: 'Formally activated protocols for resource allocation when disaster conditions create scarcity that makes conventional care delivery impossible, guided by ethical frameworks emphasizing fairness, transparency, and maximizing benefit while incorporating safeguards against discrimination' },
        { term: 'compound extreme events', definition: 'Co-occurring or sequential climate-driven disasters (e.g., drought-heat wave-wildfire cascades, hurricane-flooding-chemical release sequences) that are increasing in frequency and challenge disaster preparedness assumptions based on single-hazard planning' },
        { term: 'Disaster Victim Identification (DVI)', definition: 'The systematic process of identifying deceased disaster victims using the Interpol DVI protocol with four primary identifiers: fingerprints, dental records, DNA analysis, and unique medical identifiers such as implants and prosthetics' },
        { term: 'healthcare coalition', definition: 'A regional partnership of hospitals, public health agencies, and emergency management organizations that share resources, information, and patient load during emergencies, supported by ASPR Hospital Preparedness Program funding' },
      ],
      clinicalNotes: `Professional-level clinical notes:

1. **Climate-informed preparedness is no longer optional.** Facility-level and community-level hazard vulnerability analyses must incorporate climate projection data (not just historical patterns). The 100-year flood and the design-basis earthquake are outdated concepts that systematically underestimate future risk.

2. **Social Vulnerability Index (SVI) should guide preparedness resource allocation.** High-SVI communities have demonstrably worse disaster outcomes. Pre-disaster investments in these communities (supply pre-positioning, accessible communication, evacuation assistance infrastructure) are more cost-effective than post-disaster response.

3. **Crush syndrome preparedness for earthquake-prone regions**: Emergency medical services in seismic zones should stock IV normal saline, calcium gluconate, and sodium bicarbonate in rescue vehicles, with protocols for pre-extrication fluid resuscitation. Field dialysis capability may be needed for earthquake mass casualty events.

4. **Telemedicine should be a core component of disaster medical response plans**, not an afterthought. Pre-established telemedicine networks with interstate licensure agreements enable rapid specialist access in disaster-affected areas. Behavioral telehealth is particularly critical given the 10:1 ratio of psychological to physical casualties.

5. **Healthcare coalition maturation is the key to system-level resilience.** Individual hospital preparedness is necessary but insufficient. Regional patient load-balancing, shared resource inventories, and unified situational awareness require mature coalition infrastructure that is tested through regular exercises.

6. **Ethical preparedness (developing and socializing crisis standards of care protocols BEFORE disasters) is essential.** Making allocation decisions ad hoc during a crisis leads to inconsistent, potentially discriminatory outcomes. Crisis standards of care should be developed through inclusive community engagement, legally vetted, and regularly exercised.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'cite-disaster-prep-1',
      type: 'guideline',
      title: 'Plan Ahead for Disasters',
      source: 'Centers for Disease Control and Prevention (CDC)',
      url: 'https://www.cdc.gov/prepare/index.html',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cite-disaster-prep-2',
      type: 'guideline',
      title: 'Emergency Preparedness and Response',
      source: 'American Red Cross',
      url: 'https://www.redcross.org/get-help/how-to-prepare-for-emergencies.html',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cite-disaster-prep-3',
      type: 'website',
      title: 'Ready.gov: Plan Ahead for Disasters',
      source: 'Federal Emergency Management Agency (FEMA)',
      url: 'https://www.ready.gov/',
      accessedDate: '2025-01-15',
    },
  ],

  crossReferences: [
    {
      targetId: 'topic-disaster-first-aid',
      targetType: 'topic',
      relationship: 'related',
      label: 'Disaster First Aid',
    },
    {
      targetId: 'topic-when-to-call-911',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'When to Call 911',
    },
  ],

  tags: {
    systems: ['emergency-medicine'],
    topics: ['first-aid', 'emergency', 'disaster-preparedness', 'public-health'],
    keywords: ['natural disaster', 'earthquake', 'hurricane', 'tornado', 'flood', 'wildfire', 'emergency kit', 'evacuation', 'preparedness', 'disaster planning'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
