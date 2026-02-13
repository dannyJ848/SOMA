/**
 * Evacuation Decisions - Comprehensive Educational Content
 *
 * When to evacuate vs stay, evacuation methods, and communication with rescue.
 *
 * IMPORTANT: This content is for educational purposes only. In any
 * wilderness emergency, prioritize evacuation to medical care when possible.
 */

import { EducationalContent } from '../../types';

export const evacuationDecisions: EducationalContent = {
  id: 'wilderness-evacuation-decisions',
  type: 'concept',
  name: 'Evacuation Decisions',
  alternateNames: ['Wilderness Evacuation', 'Search and Rescue Decisions', 'Emergency Evacuation'],

  levels: {
    1: {
      level: 1,
      summary: 'When someone gets hurt in the wilderness, you need to decide whether to walk out, wait for help, or call for rescue. The decision depends on how badly hurt they are, how far from help you are, and what weather and terrain are like.',
      explanation: `## When Should You Get Help?

In the wilderness, getting to a hospital is not as easy as at home. You need to think carefully about the best way to help an injured person.

## Three Main Options

**1. Walk Out (Self-Evacuation)**
- The injured person walks out with help from the group
- Good when injuries are minor (sprained ankle, small cuts)
- Everyone helps carry gear

**2. Stay and Wait**
- Set up camp and wait for help to arrive
- Good when rescue is on the way
- Keep the injured person warm and comfortable

**3. Call for Rescue**
- Use a satellite device or cell phone to call for help
- Helicopters or rescue teams come to you
- For serious injuries that need quick medical care

## Signs You Need Rescue Help

Call for help if someone:
- Cannot walk at all
- Has trouble breathing
- Cannot stay awake
- Has a badly broken bone
- Has serious bleeding you cannot stop
- Shows signs of altitude sickness getting worse
- Has chest pain or stroke symptoms

## When You Can Walk Out

Walking out might work if:
- The person can walk with help
- It is not too far to the trailhead
- Weather is safe for travel
- You have enough daylight
- The trail is not too dangerous

## The Golden Rule

**When in doubt, call for help early.** It takes time for rescuers to reach you. If you wait too long, it may be too late.

## How to Help Rescuers Find You

- Stay in one place once you call
- Make yourself visible (bright colors, signals)
- Clear a landing zone if helicopters might come
- Know your GPS coordinates if possible`,
      keyTerms: [
        { term: 'evacuation', definition: 'Getting someone out of the wilderness to a hospital or medical care' },
        { term: 'self-evacuation', definition: 'When the group walks out on their own without rescue help' },
        { term: 'rescue', definition: 'When trained teams come to help you, sometimes with helicopters' },
        { term: 'GPS coordinates', definition: 'Numbers that tell rescuers exactly where you are on Earth' },
      ],
      analogies: [
        'Deciding to evacuate is like deciding whether to drive to the emergency room or call an ambulance - it depends on how serious the injury is.',
        'Waiting too long to call for help is like waiting too long to leave for the airport - you might miss your chance.',
      ],
      examples: [
        'A hiker with a sprained ankle uses a walking stick and friend support to walk 3 miles back to the car.',
        'A climber with a possible spine injury stays still while friends call for helicopter rescue.',
        'A group caught in a storm waits for the next morning before hiking out.',
      ],
    },
    2: {
      level: 2,
      summary: 'Evacuation decisions in wilderness settings require balancing injury severity, available resources, environmental conditions, and time to definitive care. Options include assisted self-evacuation, litter carry-out, and external rescue (ground or helicopter). Clear evacuation criteria and early activation of rescue resources improve outcomes.',
      explanation: `## The Evacuation Decision Framework

Wilderness evacuation decisions depend on four key factors:
1. **Patient condition** - How serious is the injury?
2. **Group resources** - What can you do with available people and equipment?
3. **Environment** - Weather, terrain, daylight remaining
4. **Time to definitive care** - How long to reach a hospital?

## Evacuation Categories

### Category 1: Immediate Evacuation Required
Call for rescue immediately:
- Airway compromise or respiratory distress
- Uncontrolled bleeding
- Signs of shock (rapid pulse, pale, confused)
- Spinal injury suspected
- Serious head injury with altered consciousness
- Chest pain suggesting heart attack
- Severe allergic reaction (anaphylaxis)
- Stroke symptoms
- HACE or HAPE (altitude sickness emergencies)
- Internal injuries suspected

### Category 2: Urgent Evacuation (Within Hours)
Begin evacuation planning:
- Fractures of major bones (femur, pelvis)
- Moderate head injury
- Significant burns
- Abdominal pain suggesting internal problem
- High fever with serious infection signs
- Worsening altitude sickness
- Eye injuries affecting vision

### Category 3: Non-Urgent Evacuation
Can wait for favorable conditions:
- Minor fractures (finger, toe)
- Sprains with ability to bear weight
- Minor burns
- Wounds that are cleaned and controlled
- Mild altitude sickness

### Category 4: No Evacuation Needed
Treat in field and continue:
- Minor cuts and scrapes
- Mild sprains
- Blisters
- Minor illness

## Evacuation Methods

### Self-Evacuation (Walking Out)
**Best when:**
- Patient can walk with assistance
- Distance is manageable
- Terrain allows travel
- Weather is safe
- Condition is stable or improving

**Tips:**
- Redistribute pack weight
- Use trekking poles or improvised crutches
- Take frequent rest breaks
- Monitor for deterioration

### Assisted Carry (Litter Evacuation)
**Best when:**
- Patient cannot walk
- Rescue not available or delayed
- Group is large enough (6-8 people minimum for litter carry)
- Terrain allows passage

**Requirements:**
- Improvised or commercial litter
- Multiple carriers (rotate frequently)
- Route planning for litter passage
- Extremely slow progress (expect 1 mile per hour or less)

### External Rescue

**Ground Teams:**
- Can reach locations helicopters cannot
- Bring advanced medical equipment
- Available in most wilderness areas
- May take many hours to reach you

**Helicopter Rescue:**
- Fastest method when available
- Requires suitable landing zone
- Weather dependent
- Not available in all areas
- Very expensive if not covered by SAR

## When to Activate Rescue

**Activate early if:**
- Any Category 1 condition
- Evacuation will take longer than patient condition allows
- Group cannot safely perform self-evacuation
- Weather window closing
- Nightfall approaching

**Rule of Thumb:** If you are considering whether to call for rescue, you should probably call. Rescue teams would rather respond to a situation that turns out manageable than arrive too late.

## Communicating with Rescue

### Information to Provide
1. **Location** (GPS coordinates if possible, or detailed description)
2. **Nature of emergency** (what happened, how many injured)
3. **Patient condition** (brief medical summary)
4. **Resources on scene** (group size, equipment)
5. **Hazards** (weather, terrain, avalanche risk)
6. **Landing zone availability** for helicopter

### Landing Zone Requirements
- Flat area at least 100 x 100 feet
- Clear of obstacles (trees, power lines, debris)
- Firm surface
- Marked with bright material
- Wind indicator if possible
- Group moved at least 200 feet away

## Decision Example

**Scenario:** Hiking partner falls and fractures ankle at 10 miles from trailhead.

**Assessment:**
- Patient cannot walk but is stable
- Group of 4 people (too few for litter carry)
- Weather is good but night in 5 hours
- Cell service unavailable but have satellite messenger

**Decision:** Activate rescue. Splint ankle, keep patient warm, send GPS coordinates, prepare for ground team (likely too far for helicopter response before dark).`,
      keyTerms: [
        { term: 'definitive care', definition: 'Full medical treatment at a hospital or medical facility' },
        { term: 'litter', definition: 'A stretcher or carrying device for transporting an injured person' },
        { term: 'SAR', definition: 'Search and Rescue - organized teams that respond to wilderness emergencies' },
        { term: 'landing zone', definition: 'A clear area where a helicopter can safely land, typically 100 x 100 feet minimum' },
        { term: 'self-evacuation', definition: 'When the injured person and their group travel out without outside rescue assistance' },
      ],
      analogies: [
        'Evacuation categories are like hospital triage - some patients go straight to surgery, others can wait.',
        'Calling for rescue early is like ordering a pizza before you are starving - it takes time to arrive.',
      ],
    },
    3: {
      level: 3,
      summary: 'Wilderness evacuation decisions integrate patient assessment, available resources, environmental factors, and time-distance calculations. A systematic approach using evacuation categories helps prioritize urgency. Coordination with search and rescue requires clear communication of patient condition, location, and hazards. Understanding helicopter capabilities and limitations informs realistic rescue planning.',
      explanation: `## Systematic Evacuation Decision-Making

### SOAP-E Framework

Wilderness medicine uses the SOAP note with evacuation planning (E):

**S - Subjective:** Chief complaint, mechanism of injury, history
**O - Objective:** Vitals, physical exam, mental status
**A - Assessment:** Likely diagnosis, severity
**P - Plan:** Field treatment, monitoring
**E - Evacuation:** Decision and method

### Patient Assessment for Evacuation

**Vital Signs Concerning for Evacuation:**
- Respiratory rate >24 or <10
- Heart rate >120 or <50
- Systolic BP <90 (if measurable)
- SpO2 <90% (if measurable)
- GCS <15 (any alteration)
- Temperature >39C or <35C

**Mechanism Concerning for Evacuation:**
- Falls >20 feet
- High-speed impact
- Submersion incidents
- Lightning strike
- Penetrating trauma to torso
- Crushing injuries

### Evacuation Urgency Matrix

| Factor | Increases Urgency | Decreases Urgency |
|--------|-------------------|-------------------|
| Vital signs | Abnormal | Stable |
| Mental status | Altered | Normal |
| Trajectory | Deteriorating | Stable/improving |
| Pain control | Unmanageable | Adequate |
| Time to care | Long | Short |
| Environment | Hostile | Favorable |
| Resources | Limited | Adequate |

## Evacuation Method Selection

### Decision Algorithm

\`\`\`
Can patient walk with assistance?
  YES -> Self-evacuation if:
         - Distance manageable
         - Terrain safe
         - Weather acceptable
         - Condition stable
  NO -> Is condition immediately life-threatening?
         YES -> Activate emergency rescue (helicopter if available)
         NO -> Can group perform litter carry?
               YES -> Carry-out if faster than rescue response
               NO -> Activate rescue, prepare for ground team
\`\`\`

### Self-Evacuation Considerations

**Feasibility factors:**
- Patient weight-bearing status
- Distance to trailhead/road
- Elevation gain/loss
- Terrain difficulty (class rating)
- Expected pace (often 1/3 to 1/2 normal)
- Daylight remaining
- Weather forecast

**Monitoring during self-evacuation:**
- Regular vital sign checks
- Mental status assessment
- Pain level tracking
- Watch for deterioration
- Have threshold for activating rescue

### Litter Evacuation

**Personnel requirements:**
- Minimum 6 carriers for flat terrain
- 8-12 for technical terrain
- Rotation every 100-200 meters
- Team leader for coordination

**Pace expectations:**
- Flat trail: 1-2 miles/hour
- Moderate terrain: 0.5-1 mile/hour
- Technical terrain: <0.5 mile/hour
- Night travel: half daytime pace

**Improvised litters:**
- Internal frame backpacks lashed together
- Sleeping pads with rope frame
- Poles with fabric platform
- Commercial folding litters (recommended)

## Search and Rescue Coordination

### Activation Pathways

**911:** Standard emergency number, works for wilderness calls
**Satellite communicators:** InReach, SPOT, PLB devices
**Cell phone:** May work from high points
**Voice radio:** If in contact with others

### Information for SAR

**METHANE Report:**
- **M**ajor incident type
- **E**xact location (GPS coordinates ideal)
- **T**ype of incident (medical, trauma, etc.)
- **H**azards present (weather, terrain, avalanche)
- **A**ccess routes
- **N**umber of patients
- **E**mergency services required

### Helicopter Operations

**Flight limitations:**
- Altitude ceiling varies by aircraft (typically 10,000-14,000 ft)
- Wind limits: generally <30 knots
- Visibility: requires VFR conditions
- Darkness: many SAR helicopters not night-capable
- Weight limits: patient + rescuer + equipment

**Landing zone (LZ) requirements:**
- 100 x 100 foot minimum for landing
- Slope <10 degrees
- Clear approach and departure paths
- Obstacle clearance (no wires, trees within 100m)
- Surface: firm, minimal dust/snow rotor wash

**Short-haul/hoist operations:**
- When LZ not available
- Requires specialized training and equipment
- Not available in all areas
- Higher risk procedure

### Ground Team Operations

**Expectations:**
- Response time varies widely (hours to days)
- May require extended stabilization
- Teams bring medical equipment
- Can operate in conditions helicopters cannot
- May use technical rescue skills

## Environmental Considerations

### Weather Windows

**Forecast integration:**
- Monitor conditions continuously
- Plan evacuation for optimal windows
- Consider conditions at destination
- Helicopter operations highly weather-sensitive

**Deteriorating conditions:**
- May force early evacuation
- May strand patient in worse situation
- Have contingency plans

### Terrain Factors

**Class ratings and evacuation:**
- Class 1-2: Self-evacuation usually possible
- Class 3: May need assistance/belays
- Class 4-5: Technical rescue likely needed
- Water crossings: major evacuation obstacles

### Time Calculations

**Critical variables:**
- Time since injury
- Estimated time to trailhead
- Estimated rescue response time
- Time to definitive care
- Condition-specific time sensitivity

**Example calculation:**
\`\`\`
Current: 2:00 PM, injury occurred 1:00 PM
Distance to trailhead: 8 miles
Self-evac pace: 1.5 mph -> 5.3 hours -> 7:20 PM arrival
Drive to hospital: 1 hour -> 8:20 PM definitive care
Total time: 7+ hours from injury

vs.

Helicopter response: 90 minutes -> patient pickup 3:30 PM
Flight to hospital: 30 minutes -> 4:00 PM definitive care
Total time: 3 hours from injury
\`\`\`

For time-sensitive conditions (head injury, internal bleeding, STEMI), the difference is critical.`,
      keyTerms: [
        { term: 'SOAP-E', definition: 'Systematic documentation format adding Evacuation planning to standard SOAP notes' },
        { term: 'GCS', definition: 'Glasgow Coma Scale - standardized assessment of consciousness level, 15 is normal', pronunciation: 'jee-see-ess' },
        { term: 'VFR', definition: 'Visual Flight Rules - conditions allowing pilots to navigate by visual reference' },
        { term: 'short-haul', definition: 'Helicopter rescue technique using external cable when landing is not possible' },
        { term: 'METHANE', definition: 'Mnemonic for standardized emergency incident reporting' },
      ],
      clinicalNotes: 'Evacuation decisions should err on the side of caution. SAR teams prefer activating early and standing down if not needed rather than delayed activation. Time-sensitive conditions (head injury, internal bleeding, cardiac events) demand aggressive evacuation even if stable-appearing.',
    },
    4: {
      level: 4,
      summary: 'Wilderness evacuation decision-making requires integration of patient trajectory, resource constraints, environmental variables, and time-to-care calculations. Systematic frameworks guide urgency categorization and method selection. Effective SAR coordination requires standardized communication, understanding of aviation limitations, and realistic logistical planning. Evidence-based protocols improve outcomes while avoiding unnecessary resource deployment.',
      explanation: `## Advanced Evacuation Decision Framework

### Risk-Benefit Analysis Model

**Evacuation Decision Matrix:**
\`\`\`
Net Benefit = (Benefit of earlier care) - (Risks of evacuation method)

Factors increasing benefit:
- Time-sensitive condition
- Deteriorating trajectory
- Limited field treatment options
- Hostile environment

Factors increasing risk:
- Technical terrain for evacuation
- Adverse weather
- Night operations
- Patient instability during transport
\`\`\`

### Patient Trajectory Assessment

**Predictive factors:**
- Initial severity (mortality risk stratification)
- Response to field treatment
- Time since injury (golden hour concepts)
- Mechanism energy transfer
- Comorbidities and medications

**Trajectory categories:**
1. **Improving:** May downgrade evacuation urgency
2. **Stable:** Time for careful planning
3. **Uncertain:** Conservative approach, prepare for deterioration
4. **Deteriorating:** Immediate action required
5. **Expectant:** In mass casualty, may alter triage

### Wilderness-Specific Triage Considerations

**Differences from urban triage:**
- Extended transport times
- Limited resources
- Environmental exposure
- Team fatigue
- Multiple iterations of assessment

**SALT Triage adaptation for wilderness:**
- Sort (walking vs. not walking)
- Assess (life threats)
- Lifesaving interventions (limited to available)
- Treatment/Transport (evacuation category assignment)

## Evacuation Physiology

### Transport Stresses

**Stressors during evacuation:**
- Motion and vibration
- Position changes
- Altitude changes (helicopter)
- Temperature extremes
- Noise (helicopter cabin)
- Psychological stress

**Physiological effects:**
- Pain exacerbation
- Nausea/vomiting
- Hemodynamic instability
- Respiratory compromise
- ICP elevation (head injury)

### Altitude Considerations

**Helicopter altitude effects:**
- Cabin altitude typically 4,000-8,000 ft
- Gas expansion (pneumothorax, bowel injury)
- Decreased SpO2
- Air splint pressure changes

**Specific concerns:**
- Pneumothorax: Expand at altitude, requires chest tube/seal
- Decompression sickness: Altitude exacerbates
- Head injury: Hypoxia worsens outcome
- HAPE: Descent beneficial, but continued altitude exposure during flight

### Litter Carry Biomechanics

**Physical demands:**
- Energy expenditure: 5-8 METs carrying corner
- Pace unsustainable beyond 15-20 minutes per rotation
- Cumulative fatigue affects safety

**Injury prevention:**
- Proper lifting mechanics
- Adequate rotation schedule
- Hydration and nutrition for carriers
- Rest breaks every 200-300 meters

## Search and Rescue Operations

### Incident Command Integration

**Wilderness SAR structure:**
\`\`\`
Incident Commander
  |
  +-- Operations Section
  |     +-- Ground Teams
  |     +-- Aviation
  |     +-- Medical
  |
  +-- Planning Section
  +-- Logistics Section
  +-- Finance/Admin Section
\`\`\`

**Your role as field responder:**
- Provide accurate patient information
- Follow IC instructions
- Maintain communication
- Prepare patient for transport
- Document thoroughly

### Aviation Resource Management

**Helicopter types in SAR:**
| Type | Capability | Limitations |
|------|------------|-------------|
| Light (Bell 206) | 2-3 passengers | Limited altitude, power |
| Medium (Bell 412, EC145) | 4-6 passengers | Most SAR workhorse |
| Heavy (CH-47) | 10+ passengers | Limited availability |

**Mission planning considerations:**
- Weight and balance calculations
- Fuel requirements (round trip + reserve)
- Crew duty time limitations
- Equipment requirements
- Weather minimums

### Hoist and Short-Haul Operations

**Hoist operations:**
- Cable lengths typically 200-250 ft
- Direct deployment to patient location
- Rescuer inserted for patient packaging
- Higher risk: cable break, oscillation

**Short-haul:**
- External line, 100-200 ft
- Patient transported hanging below helicopter
- Requires specialized training
- Used when hoist length insufficient

**Technical rescue interface:**
- Helicopter may insert technical team
- Rope rescue for extraction
- Then helicopter evacuation
- Coordination critical

## Communication Protocols

### Medical Consultation

**Telemedicine integration:**
- Real-time physician guidance
- Diagnostic support
- Treatment recommendations
- Evacuation decision support

**Information to convey:**
- Mechanism of injury
- SAMPLE history
- Physical exam findings
- Vital signs trend
- Field interventions
- Current status

### Documentation for Handoff

**MIST report for receiving facility:**
- **M**echanism of injury
- **I**njuries found
- **S**igns (vital signs)
- **T**reatment given

**Chain of custody:**
- Document all interventions
- Note timing of changes
- Record rescue personnel involved
- Preserve any evidence if indicated

## Special Situations

### Mass Casualty Events

**Triage in wilderness MCI:**
- START/JumpSTART adaptation
- Resource-limited context
- Extended casualty holding
- Sequential evacuation prioritization

### Remote and International Settings

**Considerations:**
- Rescue capabilities vary widely
- Insurance and repatriation planning
- Language barriers
- Different medical systems
- Evacuation may take days

### Refusal of Care/Evacuation

**Competent adult refusal:**
- Assess decision-making capacity
- Explain risks clearly
- Document thoroughly
- Offer alternatives
- Provide follow-up instructions`,
      keyTerms: [
        { term: 'SALT triage', definition: 'Sort-Assess-Lifesaving interventions-Treatment/transport; mass casualty triage system' },
        { term: 'MET', definition: 'Metabolic Equivalent of Task - measure of energy expenditure' },
        { term: 'MIST', definition: 'Mechanism-Injuries-Signs-Treatment; handoff communication framework' },
        { term: 'hoist', definition: 'Cable-deployed rescue from helicopter, typically 200-250 feet' },
        { term: 'incident commander', definition: 'Person with overall authority for managing an emergency response' },
      ],
      clinicalNotes: 'Helicopter cabin altitude can worsen pneumothorax - ensure chest seal or tube before flight. HAPE patients benefit from descent during helicopter evacuation but may deteriorate if altitude not reduced. Severe head injury patients should receive supplemental oxygen during any aviation transport. Document patient trajectory to support evacuation decisions upon review.',
    },
    5: {
      level: 5,
      summary: 'Optimal wilderness evacuation decision-making synthesizes patient acuity assessment, resource capabilities, environmental constraints, and evidence-based time-to-treatment considerations. Contemporary approaches integrate telemedicine consultation, predictive scoring systems, and standardized communication frameworks. Understanding search and rescue operational parameters enables realistic planning while ethical considerations address resource allocation and patient autonomy.',
      explanation: `## Evidence-Based Evacuation Criteria

### Trauma Scoring in Wilderness Context

**Revised Trauma Score (RTS) adaptation:**
\`\`\`
RTS = 0.9368(GCS value) + 0.7326(SBP value) + 0.2908(RR value)
Scores 1-12; lower scores = worse prognosis
\`\`\`

**Limitations in wilderness:**
- BP often not measurable
- GCS requires training
- Doesn't capture mechanism
- Static assessment

**Injury Severity Score considerations:**
- Requires definitive diagnosis
- Not practical in field
- Retrospective validation

### Time-Sensitive Conditions

**Golden Hour evidence:**
- Original concept from military trauma
- Mortality increases with delayed resuscitation
- More nuanced in civilian/wilderness context
- Platinum 10 minutes for immediately correctable threats

**Condition-specific windows:**
| Condition | Critical Window | Rationale |
|-----------|-----------------|-----------|
| Tension pneumothorax | Minutes | Obstructive shock |
| Arterial hemorrhage | 10-60 minutes | Exsanguination |
| STEMI | 90-120 minutes | Myocardial salvage |
| Stroke (large vessel) | 4.5-24 hours | Thrombolysis/thrombectomy |
| Spinal cord injury | Hours | Secondary injury prevention |
| Compartment syndrome | 6-8 hours | Fasciotomy timing |
| Testicular torsion | 6 hours | Salvage rate |

### Predictive Modeling

**Factors predicting need for intervention:**
- Mechanism (high energy, penetrating)
- Physiology (abnormal vitals, lactate if available)
- Anatomy (injury pattern)
- Comorbidities

**Future directions:**
- Point-of-care biomarkers (lactate, troponin)
- Wearable vital sign monitoring
- AI-assisted decision support
- Predictive algorithms for deterioration

## Operational Medicine Considerations

### Resource-Limited Decision Framework

**Utilitarian considerations:**
- Greatest good for greatest number
- Resource allocation ethics
- Team safety vs. patient benefit
- Sustainability of effort

**Principles:**
1. Do not create more casualties
2. Preserve team capability
3. Prioritize salvageable patients
4. Accept limitations

### SAR Resource Allocation

**Factors in SAR response:**
- Probability of detection (search)
- Probability of survival
- Resource availability
- Risk to rescue personnel
- Cost-effectiveness

**Helicopter deployment criteria:**
- Medical necessity for air evacuation
- Inaccessibility by ground
- Weather window available
- Daylight considerations
- Alternative resource availability

### Telemedicine Integration

**Current capabilities:**
- Voice consultation via satellite
- Photo/video transmission
- ECG transmission (select devices)
- Real-time vital sign monitoring (emerging)

**Consultation indications:**
- Diagnostic uncertainty
- Treatment decisions
- Evacuation decision support
- Medication dosing
- Procedural guidance

**Limitations:**
- Connectivity dependent
- Battery limitations
- Not substitute for hands-on care
- Liability considerations

## Aviation Medicine for Wilderness Evacuation

### Aeromedical Physiology

**Altitude effects:**
\`\`\`
Barometric pressure: PB = 760 * exp(-altitude/7000) mmHg approximately
Alveolar PO2: PAO2 = FiO2(PB - 47) - PaCO2/0.8
At 8000 ft: PAO2 ~ 60 mmHg (vs ~100 at sea level)
\`\`\`

**Clinical implications:**
- SpO2 drops 3-5% at helicopter cruise altitude
- Gas expansion: ~30% at 8000 ft
- Hypoxia exacerbates head injury, MI
- Consider O2 supplementation

### Gas Law Applications

**Boyle's Law (P1V1 = P2V2):**
- Pneumothorax expansion
- Middle ear/sinus barotrauma
- GI distention
- Air splint pressure changes
- Endotracheal tube cuff

**Preparation:**
- Decompress pneumothorax before flight
- NG tube if GI distention
- Convert air splints
- Adjust ETT cuff

### Flight Physiology Mitigation

**Strategies:**
- Supplemental O2 for patients at risk
- Lower flight altitude when possible
- Pressurized cabin if available
- Monitoring during transport

## Ethical Frameworks

### Resource Allocation Ethics

**Principles in conflict:**
- Beneficence (do good)
- Non-maleficence (do no harm)
- Autonomy (patient choice)
- Justice (fair distribution)

**Wilderness-specific tensions:**
- Team safety vs. rescue attempt
- Individual vs. group welfare
- Resource expenditure vs. probability of success
- Quality of life considerations

### End-of-Life Decisions

**Withholding/withdrawing care:**
- Clear futility (decapitation, incineration, decomposition)
- Less clear situations challenging
- Document carefully
- Consider team psychological impact
- Know local protocols/laws

**DNR in wilderness:**
- Prior directive validity
- Physician orders for life-sustaining treatment (POLST)
- Family communication
- Documentation requirements

### Informed Consent and Refusal

**Capacity assessment:**
- Understand information provided
- Appreciate consequences
- Reason about options
- Express a choice

**Documenting refusal:**
- Explanation of risks provided
- Patient verbalization of understanding
- Alternative options offered
- Witness signature if available

## Quality and Outcomes

### SAR Outcome Metrics

**Tracking indicators:**
- Response time to patient contact
- Time to definitive care
- Patient condition on arrival
- Survival rates by injury type
- Complications during transport

### After-Action Review

**Components:**
- Timeline reconstruction
- Decision point analysis
- What went well
- Opportunities for improvement
- System-level learnings

### Research Priorities

**Evidence gaps:**
- Evacuation criteria validation
- Telemedicine effectiveness
- Time-to-care outcome data
- Predictive tool development
- Resource optimization`,
      keyTerms: [
        { term: 'platinum 10 minutes', definition: 'Critical window for addressing immediately life-threatening conditions in the field' },
        { term: 'Boyles Law', definition: 'Gas law stating pressure and volume are inversely proportional at constant temperature; relevant to altitude changes' },
        { term: 'POLST', definition: 'Physician Orders for Life-Sustaining Treatment; actionable medical orders for end-of-life care' },
        { term: 'probability of detection', definition: 'Likelihood that search efforts will locate a missing/injured person; key SAR planning metric' },
        { term: 'utilitarian ethics', definition: 'Ethical framework prioritizing greatest good for greatest number; relevant to resource allocation' },
      ],
      clinicalNotes: `Clinical Pearls for Evacuation Decisions:
1. Activate SAR early - response time is often longer than anticipated
2. Patient trajectory (improving/stable/deteriorating) more important than single assessment
3. Gas expansion at helicopter altitude can convert simple pneumothorax to tension
4. Time-sensitive conditions (STEMI, stroke, compartment syndrome) demand aggressive evacuation
5. Document decision-making rationale for retrospective review
6. Telemedicine consultation valuable for diagnostic uncertainty
7. Team fatigue is a safety factor - rescue personnel are also patients
8. Know your SAR system capabilities before you need them
9. Ethical dilemmas should be discussed pre-expedition when possible
10. QI review of evacuations improves future decision-making`,
    },
  },

  media: [
    {
      id: 'evacuation-decision-flowchart',
      type: 'diagram',
      filename: 'evacuation-decision-algorithm.svg',
      title: 'Evacuation Decision Algorithm',
      description: 'Flowchart for wilderness evacuation decision-making',
    },
    {
      id: 'lz-requirements',
      type: 'diagram',
      filename: 'helicopter-lz-requirements.svg',
      title: 'Helicopter Landing Zone Requirements',
      description: 'Diagram showing minimum dimensions and clearances for helicopter LZ',
    },
  ],

  citations: [
    {
      id: 'wms-evacuation-guidelines',
      type: 'article',
      title: 'Wilderness Medical Society Practice Guidelines for Wilderness Emergency Care',
      source: 'Wilderness & Environmental Medicine',
    },
    {
      id: 'nps-sar-reference',
      type: 'article',
      title: 'National Park Service Search and Rescue Reference Manual',
      source: 'National Park Service',
    },
    {
      id: 'auerbach-evacuation-chapter',
      type: 'textbook',
      title: 'Wilderness Medicine',
      authors: ['Auerbach, P.S.'],
      source: 'Elsevier',
      chapter: 'Wilderness Emergency Medical Services and Response Systems',
    },
  ],

  crossReferences: [
    { targetId: 'wilderness-field-assessment', targetType: 'concept', relationship: 'related', label: 'Field Assessment' },
    { targetId: 'wilderness-emergency-communication', targetType: 'concept', relationship: 'related', label: 'Emergency Communication' },
    { targetId: 'wilderness-altitude-sickness-overview', targetType: 'condition', relationship: 'see-also', label: 'Altitude Sickness' },
  ],

  tags: {
    systems: ['emergency-medicine', 'wilderness-medicine'],
    topics: ['decision-making', 'evacuation', 'search-and-rescue'],
    keywords: ['evacuation', 'SAR', 'rescue', 'helicopter', 'triage', 'transport'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: false,
      nbme: false,
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default evacuationDecisions;
