/**
 * Hypothermia - Comprehensive Educational Content
 *
 * Dangerously low core body temperature from cold exposure.
 *
 * IMPORTANT: This content is for educational purposes only. Severe hypothermia
 * is a medical emergency requiring immediate evacuation to definitive care.
 */

import { EducationalContent } from '../../types';

export const hypothermia: EducationalContent = {
  id: 'wilderness-hypothermia',
  type: 'condition',
  name: 'Hypothermia',
  alternateNames: ['Cold Exposure', 'Low Body Temperature', 'Exposure'],

  levels: {
    1: {
      level: 1,
      summary: 'Hypothermia happens when your body gets too cold and cannot warm itself up. It is dangerous and can happen even when it is not freezing outside, especially if you are wet or in the wind.',
      explanation: `## What Is Hypothermia?

Your body normally stays at about 98.6°F (37°C). Hypothermia happens when your body temperature drops too low - below 95°F (35°C). When this happens, your body cannot work properly.

## How Does It Happen?

Your body loses heat in these ways:
- **Getting wet** - water pulls heat away fast
- **Wind** - moving air steals heat quickly
- **Cold air or water** - your body tries to warm them
- **Sitting on cold ground** - the ground absorbs your heat

## Warning Signs

**Early Signs (Mild Hypothermia):**
- Shivering (this is your body trying to warm up!)
- Cold hands and feet
- Feeling clumsy
- Needing to pee more often

**Danger Signs (Getting Worse):**
- Shivering stops (very bad sign!)
- Confusion, acting strange
- Slurred speech (sounds drunk)
- Very sleepy
- Clumsy, cannot walk well

## What To Do

**For Mild Hypothermia:**
- Get out of wind and wet
- Change into dry clothes
- Drink warm (not hot) drinks
- Keep moving gently
- Get into a sleeping bag or blankets

**For Severe Hypothermia - This Is An Emergency!**
- Be very gentle with the person
- Do not rub their skin
- Keep them lying flat
- Warm slowly with body heat or warm blankets
- Call for help immediately

## Prevention

- Dress in layers
- Stay dry - change wet clothes quickly
- Eat food and drink water
- Do not push until exhausted
- Watch your friends for signs`,
      keyTerms: [
        { term: 'hypothermia', definition: 'When your body temperature drops dangerously low', pronunciation: 'hy-poh-THUR-mee-uh' },
        { term: 'core temperature', definition: 'The temperature deep inside your body' },
        { term: 'shivering', definition: 'When your muscles shake automatically to make heat' },
      ],
      analogies: [
        'Your body is like a heater that needs fuel (food) to keep running.',
        'Wet clothes are like leaving the refrigerator door open - heat escapes fast.',
        'When shivering stops, it is like the heater ran out of fuel - emergency!',
      ],
      examples: [
        'A hiker got caught in rain and became confused - had mild hypothermia.',
        'A swimmer in cold water started shivering badly and needed to get out fast.',
        'Fall into cold water can cause hypothermia in minutes.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hypothermia is classified by core temperature: mild (32-35°C), moderate (28-32°C), and severe (<28°C). Management focuses on preventing further heat loss, gentle rewarming, and avoiding complications like rewarming arrhythmias. Recognition of "shivering stops" as a danger sign is critical.',
      explanation: `## Classification

| Stage | Core Temp | Signs | Shivering |
|-------|-----------|-------|-----------|
| Mild | 32-35°C (90-95°F) | Alert, cold, shivering | Yes, intense |
| Moderate | 28-32°C (82-90°F) | Confused, clumsy | Decreasing |
| Severe | <28°C (<82°F) | Unconscious, rigid | Absent |

## Pathophysiology

**Heat Loss Mechanisms:**
- **Radiation:** Heat leaves bare skin to cooler air
- **Conduction:** Direct contact with cold surfaces (water 25x worse than air)
- **Convection:** Air/water movement carries heat away (wind chill)
- **Evaporation:** Wet skin or sweating loses heat

**Body's Response:**
1. Vasoconstriction - blood vessels narrow to keep core warm
2. Shivering - muscles generate heat
3. Increased metabolism - burns fuel for heat
4. When these fail - core temperature drops

## Clinical Presentation

### Mild Hypothermia (32-35°C)
- Vigorous shivering
- Cold extremities
- Mental status: Alert but may have poor judgment
- Coordination: Mild impairment
- Heart: Tachycardia

### Moderate Hypothermia (28-32°C)
- Shivering diminishes or stops
- Muscle rigidity develops
- Mental status: Confusion, lethargy
- Coordination: Severe ataxia
- Heart: Bradycardia, risk of arrhythmias
- "Paradoxical undressing" may occur

### Severe Hypothermia (<28°C)
- No shivering
- Rigid muscles
- Mental status: Unconscious
- Pupils may be fixed and dilated
- Heart: High arrhythmia risk, may appear dead
- Vital signs very difficult to detect

## Field Management

### General Principles
1. Prevent further heat loss
2. Rewarm appropriately for severity
3. Handle gently (cold heart is irritable)
4. Monitor for complications

### Mild Hypothermia Treatment
- Remove wet clothing
- Add insulation (dry layers, sleeping bags)
- Active movement if able (generates heat)
- Warm sweet drinks (sugar for fuel)
- Warm environment or fire if possible

### Moderate Hypothermia Treatment
- Same as mild PLUS:
- More passive rewarming
- Limit activity (cardiac risk)
- Consider heat sources to core areas (armpits, groin)
- Hot water bottles wrapped in cloth
- Do NOT give alcohol

### Severe Hypothermia Treatment
- Handle extremely gently
- Horizontal position (prevents cold blood rushing to heart)
- Insulate from ground and air
- Active rewarming if possible (but slowly)
- Be prepared for CPR
- "No one is dead until warm and dead"

## Rewarming Strategies

### Passive Rewarming
- Remove from cold environment
- Remove wet clothes
- Insulate with dry materials
- Allow body to rewarm itself
- Appropriate for mild hypothermia

### Active External Rewarming
- Apply heat sources to trunk
- Warm blankets, hot water bottles, body-to-body contact
- Avoid extremity warming first (afterdrop risk)
- Appropriate for moderate hypothermia

### Active Core Rewarming (Hospital)
- Warm IV fluids
- Warm humidified oxygen
- Peritoneal lavage
- ECMO in severe cases
- Required for severe hypothermia

## Complications

### Afterdrop
- Core temperature continues to fall during rewarming
- Cold blood from extremities returns to core
- Can trigger arrhythmias
- Minimize by warming core first

### Cardiac Arrhythmias
- Cold heart is irritable
- Atrial fibrillation common
- Ventricular fibrillation risk below 28°C
- Handle very gently
- Standard antiarrhythmics may not work when cold

## Prevention

- Layer clothing (base, insulation, shell)
- Stay dry (ventilate to prevent sweat)
- Eat regularly (fuel for heat production)
- Stay hydrated
- Recognize early signs
- Buddy system - watch each other`,
      keyTerms: [
        { term: 'afterdrop', definition: 'Continued core temperature decrease during early rewarming as cold blood returns from extremities' },
        { term: 'paradoxical undressing', definition: 'Confused hypothermic patients removing their clothes, possibly due to nerve dysfunction' },
        { term: 'vasoconstriction', definition: 'Narrowing of blood vessels to reduce heat loss from skin', pronunciation: 'vay-zoh-con-STRIK-shun' },
        { term: 'ataxia', definition: 'Loss of coordination and balance' },
      ],
      analogies: [
        'The body is like a house - you want to keep the core (living areas) warm even if the garage (extremities) gets cold.',
        'Afterdrop is like when you turn off the heat and the house keeps getting colder for a while.',
        'A cold heart is like an engine running rough - sudden jolts can stall it.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hypothermia staging guides management: mild cases require passive rewarming, moderate cases need active external rewarming with cardiac monitoring, and severe cases require active core rewarming with cardiac bypass capability. The Swiss staging system correlates clinical signs with temperature ranges. Careful handling prevents rewarming arrhythmias.',
      explanation: `## Pathophysiology

### Thermoregulatory Failure

**Normal Heat Balance:**
\`\`\`
Heat Production = Heat Loss
Metabolic rate + Activity = Radiation + Conduction + Convection + Evaporation
\`\`\`

**Hypothermia Develops When:**
- Heat loss exceeds production
- Fuel (glucose/glycogen) depleted
- Thermoregulatory mechanisms exhausted

### Cellular Effects

**Metabolic:**
- Decreased O2 consumption (~6% per °C drop)
- Impaired enzymatic function
- Cellular ATP depletion
- Metabolic acidosis

**Membrane Effects:**
- Altered membrane fluidity
- Ion pump dysfunction
- Calcium dysregulation
- Cell swelling

### Organ System Effects

**Cardiovascular:**
- Initial: Tachycardia, increased CO, vasoconstriction
- Progressive: Bradycardia, decreased CO, hypotension
- Late: Arrhythmias, asystole

**Respiratory:**
- Initial: Tachypnea
- Progressive: Decreased respiratory drive
- Decreased cough reflex
- Pulmonary edema risk during rewarming

**Neurological:**
- Progressive CNS depression
- EEG slowing
- Loss of consciousness below 30°C
- Reflexes absent below 28°C

**Hematologic:**
- Coagulopathy (enzyme dysfunction)
- Increased viscosity (hemoconcentration)
- Thrombocytopenia (splenic sequestration)
- DIC in severe cases

## Classification Systems

### Traditional Classification

| Stage | Temperature | Clinical Features |
|-------|-------------|-------------------|
| Mild | 32-35°C | Shivering, alert |
| Moderate | 28-32°C | Confusion, shivering stops |
| Severe | 20-28°C | Unconscious, rigid |
| Profound | <20°C | Vital signs absent |

### Swiss Staging System (HT I-IV)

| Stage | Findings | Estimated Temp | Management |
|-------|----------|----------------|------------|
| HT I | Conscious, shivering | 32-35°C | Field rewarming |
| HT II | Impaired consciousness | 28-32°C | Careful transport |
| HT III | Unconscious, VS present | 24-28°C | ECMO standby |
| HT IV | Apparent death | <24°C | CPR + ECMO |

## Field Assessment

### Temperature Measurement
- Epitympanic: Reasonable approximation
- Rectal: More accurate but impractical
- Esophageal: Gold standard (intubated)
- Core measurement often unavailable in field

### Clinical Assessment
- Mental status most reliable indicator
- Shivering presence/absence
- Pulse and respiration (check for 60 seconds)
- Muscle rigidity

### Differential Diagnosis
- Hypoglycemia (give sugar anyway)
- Intoxication (may coexist)
- Head injury
- Sepsis
- Drug overdose

## Management Protocols

### Field Rewarming Algorithm

\`\`\`
Suspected Hypothermia
       |
       v
Remove from cold environment
Remove wet clothes, insulate
       |
       v
Assess mental status
       |
       +---> Alert, shivering (HT I)
       |     - Active movement encouraged
       |     - Warm drinks, high-calorie food
       |     - May continue activity cautiously
       |
       +---> Impaired consciousness (HT II)
       |     - No active movement
       |     - Horizontal position
       |     - Careful active rewarming
       |     - Evacuate
       |
       +---> Unconscious, pulse present (HT III)
       |     - Extreme gentleness
       |     - No active rewarming in field
       |     - Evacuate to ECMO-capable facility
       |
       +---> No vital signs (HT IV)
             - CPR unless contraindicated
             - Continue during transport
             - "Not dead until warm and dead"
\`\`\`

### Rewarming Modalities

**Passive External Rewarming:**
- Dry insulation, vapor barrier
- Rate: 0.5-2°C/hour
- Appropriate: HT I

**Active External Rewarming:**
- Forced warm air (Bair Hugger)
- Hot water bottles to trunk
- Body-to-body contact
- Rate: 1-2°C/hour
- Appropriate: HT I-II

**Active Core Rewarming:**
- Warm IV fluids (40-42°C)
- Warm humidified O2
- Peritoneal/pleural lavage
- Rate: 2-4°C/hour
- Appropriate: HT II-III

**Extracorporeal Rewarming:**
- ECMO or cardiopulmonary bypass
- Rate: 4-6°C/hour or faster
- Appropriate: HT III-IV
- Provides cardiac support during rewarming

### Cardiac Considerations

**Arrhythmia Risk:**
- J wave (Osborn wave) on ECG
- Atrial fibrillation common
- VF risk highest 24-28°C
- Asystole below 20°C

**VF Management:**
- Defibrillation may be ineffective <30°C
- Consider single shock, then rewarm to 30°C
- Standard ACLS drugs may not work cold
- Focus on rewarming

## Complications and Prognosis

### Afterdrop
- Occurs during early rewarming
- Mechanism: Cold peripheral blood returns to core
- Prevention: Rewarm trunk first
- Can trigger arrhythmias

### Rewarming Acidosis
- Cold-trapped lactate released
- May worsen transiently with rewarming
- Usually self-correcting

### Survival Factors
- Immersion vs. non-immersion
- Duration of hypothermia
- Presence of asphyxia
- Age and comorbidities
- Potassium level (>12 mEq/L generally fatal)`,
      keyTerms: [
        { term: 'Osborn wave', definition: 'J-point elevation on ECG pathognomonic of hypothermia, also called J wave' },
        { term: 'Swiss staging', definition: 'Clinical classification system (HT I-IV) correlating symptoms with temperature ranges' },
        { term: 'ECMO', definition: 'Extracorporeal membrane oxygenation - external heart-lung support for rewarming', pronunciation: 'ECK-moh' },
        { term: 'afterdrop', definition: 'Continued core cooling during initial rewarming phase' },
        { term: 'epitympanic', definition: 'Temperature measured at the ear drum' },
      ],
      clinicalNotes: 'Swiss staging allows clinical assessment when temperature measurement is unavailable. Potassium >12 mEq/L in hypothermic arrest indicates cellular death and is generally considered incompatible with survival. ECMO is treatment of choice for severe hypothermia with hemodynamic instability or cardiac arrest.',
    },
    4: {
      level: 4,
      summary: 'Hypothermia management requires understanding of temperature-dependent physiological changes including coagulopathy, arrhythmogenesis, and drug pharmacokinetics. ECMO provides optimal rewarming for severe cases by supporting circulation during the vulnerable rewarming period. Evidence-based prognostic factors guide resuscitation decisions.',
      explanation: `## Advanced Pathophysiology

### Temperature-Dependent Physiology

**Cardiac Electrophysiology:**
\`\`\`
Progressive ECG Changes:
35°C: Sinus tachycardia, muscle tremor artifact
32°C: Bradycardia, PR/QRS/QT prolongation
30°C: J (Osborn) waves, atrial fibrillation
28°C: Increased VF susceptibility
<25°C: Asystole
\`\`\`

**Osborn Wave Mechanism:**
- Early repolarization abnormality
- Temperature-dependent potassium conductance
- Height correlates with hypothermia severity
- Resolves with rewarming

**Arrhythmia Substrate:**
- Delayed His-Purkinje conduction
- Dispersion of refractoriness
- Triggered activity from cold-induced Ca2+ handling
- Mechanical irritation from line placement

### Coagulation Dysfunction

**Mechanism:**
\`\`\`
Enzyme kinetics: Rate decreases ~10% per °C below 37°C
Platelet function: Impaired adhesion and aggregation
Endothelial factors: Altered TF, vWF release
Clinical: Normal lab values (tested at 37°C) but in vivo coagulopathy
\`\`\`

**Clinical Implications:**
- Trauma + hypothermia = "lethal triad"
- Lab tests underestimate coagulopathy
- Thromboelastography performed at patient temperature more accurate
- Correct hypothermia to restore coagulation

### Pharmacokinetics

**Drug Handling in Hypothermia:**
- Decreased hepatic metabolism
- Reduced renal excretion
- Altered protein binding
- Volume of distribution changes
- Delayed onset, prolonged duration

**ACLS Drug Modifications:**
- Epinephrine: May accumulate, consider reduced dosing
- Antiarrhythmics: Often ineffective until >30°C
- Consider withholding/reducing until rewarmed

### Oxygen-Hemoglobin Dynamics

**Leftward Shift:**
- Hypothermia shifts curve left
- Hemoglobin binds O2 more tightly
- Tissue O2 delivery impaired
- Compensated by reduced metabolic demand

**Clinical Effect:**
- SpO2 may overestimate tissue oxygenation
- PaO2 should be temperature-corrected
- Alpha-stat vs pH-stat blood gas management

## Resuscitation Considerations

### CPR in Hypothermia

**Modified Approach:**
- May be difficult to detect pulse (check 60 seconds)
- Chest compressions difficult through rigid chest
- Standard rate and depth if possible
- Cold heart may tolerate longer arrest

**When to Withhold CPR:**
- Obvious death signs (decomposition, dependent lividity)
- Injury incompatible with life
- Avalanche burial >60 minutes with airway obstruction
- Frozen chest (compressions impossible)

### Defibrillation Strategy

**Temperature-Dependent Response:**
- VF often refractory below 30°C
- Myocardium unresponsive to shocks
- Single shock attempt reasonable
- Focus on rewarming to 30°C before repeat shocks
- ECMO provides circulation while rewarming

### ACLS Modifications

**Cold-Specific Considerations:**
| Intervention | <30°C | 30-34°C |
|--------------|-------|---------|
| Defibrillation | Single shock, then hold | Resume per ACLS |
| Epinephrine | Consider holding | Double interval |
| Amiodarone | Not recommended | May use |
| Focus | Rewarm to 30°C | Standard ACLS + rewarm |

## Extracorporeal Life Support

### ECMO in Hypothermia

**Advantages:**
- Provides circulation during rewarming
- Rapid rewarming (8-12°C/hour achievable)
- Oxygenation support
- Can support through rewarming arrhythmias

**Indications:**
- Cardiac arrest with hypothermia
- Hemodynamic instability despite rewarming
- Core temperature <28°C with instability
- Refractory ventricular arrhythmias

### Outcomes with ECMO

**Favorable Factors:**
- Witnessed arrest or known downtime
- Potassium <8-12 mEq/L
- Non-asphyxial mechanism
- Younger age
- No major trauma

**Survival Rates:**
- Select populations: 50-100%
- Unselected: 15-40%
- Key: appropriate patient selection

### HOPE Score

**Hypothermia Outcome Prediction after ECLS:**
\`\`\`
Variables:
- Age
- Sex
- Mechanism (asphyxia vs. non)
- CPR duration
- Serum potassium

Score predicts probability of survival with good neurological outcome
Helps guide ECMO decision-making
\`\`\`

## Special Populations

### Avalanche Victims

**Unique Considerations:**
- May have concomitant trauma
- Asphyxia often present
- Burial time critical prognostic factor
- Airway obstruction indicates asphyxia

**Triage Approach:**
- <60 min burial, patent airway: Resuscitate aggressively
- >60 min burial, obstructed airway: Generally non-survivable
- Potassium >8 guides ECMO decision

### Cold Water Immersion

**Drowning vs. Pure Hypothermia:**
- Cold water protects if hypothermia precedes anoxia
- Warm water drowning: No protection
- Mammalian dive reflex in children
- Longer resuscitation efforts justified

### Pediatric Hypothermia

**Differences:**
- Higher surface-to-mass ratio (cool faster)
- Less subcutaneous fat
- Immature thermoregulation
- May tolerate longer arrest (cold protection)
- More aggressive resuscitation warranted

## Prevention Strategies

### Wilderness-Specific

**Layering System:**
- Base: Moisture-wicking (no cotton)
- Middle: Insulation (down, fleece)
- Outer: Wind/water shell

**Behavioral:**
- Recognize early signs in self and others
- Carry emergency bivouac supplies
- Know weather forecast
- Eat and hydrate regularly
- Turn back if conditions deteriorate`,
      keyTerms: [
        { term: 'HOPE score', definition: 'Hypothermia Outcome Prediction after ECLS score - predicts survival after ECMO rewarming' },
        { term: 'alpha-stat', definition: 'Blood gas management leaving pH uncorrected for temperature' },
        { term: 'lethal triad', definition: 'Hypothermia, acidosis, and coagulopathy - deadly combination in trauma' },
        { term: 'thromboelastography', definition: 'Viscoelastic testing of clot formation accounting for temperature effects' },
        { term: 'mammalian dive reflex', definition: 'Protective vagal response to cold water immersion, more pronounced in children' },
      ],
      clinicalNotes: 'K+ >12 mEq/L in hypothermic arrest generally indicates irreversible cellular death. ECMO should be considered for all hypothermic cardiac arrest patients without contraindications. Lab coagulation studies underestimate in vivo coagulopathy. Avalanche burial >60 minutes with airway obstruction is generally non-survivable.',
    },
    5: {
      level: 5,
      summary: 'Accidental hypothermia management has evolved with ECMO availability, enabling survival from previously fatal presentations. Evidence-based prognostic scoring (HOPE) guides resource utilization. Understanding of cold-induced channelopathies, coagulopathy mechanisms, and altered pharmacodynamics informs resuscitation. Outcomes research has clarified survival predictors and appropriate resuscitation termination criteria.',
      explanation: `## Molecular Mechanisms

### Ion Channel Effects

**Cardiac Ion Channels:**
\`\`\`
Temperature Effects on Conductance:
Na+ channels: Decreased Vmax, prolonged inactivation
K+ channels: Decreased conductance, action potential prolongation
Ca2+ channels: Altered L-type kinetics, abnormal Ca2+ handling
Na/K-ATPase: Decreased activity, cellular ion imbalance

Result: Prolonged action potential, increased refractoriness
        Uneven effects create arrhythmia substrate
\`\`\`

**Osborn Wave Genesis:**
- Transient outward K+ current (Ito) enhanced relative to other currents
- Temperature-dependent heterogeneity of repolarization
- More prominent in epicardium than endocardium
- Similar mechanism to Brugada syndrome

### Cold-Induced Coagulopathy

**Molecular Basis:**
\`\`\`
Enzyme Function:
- Clotting cascade enzymes are serine proteases
- Optimal activity at 37°C
- 10% reduction per °C below normal

Platelet Function:
- Thromboxane A2 synthesis reduced
- Dense granule release impaired
- Shape change and aggregation diminished

Endothelial Effects:
- Increased vWF release (prothrombotic)
- Decreased thrombomodulin (pro-coagulant)
- Net effect: Complex dysfunction
\`\`\`

### Cellular Protection Mechanisms

**Metabolic Suppression:**
- CMRo2 decreases 6-7% per °C
- Allows prolonged circulatory arrest tolerance
- Brain injury: ~5 min at 37°C vs. ~60 min at 18°C

**Apoptosis Suppression:**
- Cold inhibits caspase activation
- Mitochondrial transition pore remains closed
- Reduced cytochrome c release

**Limitations:**
- Anoxia before hypothermia negates protection
- Rewarming may trigger reperfusion injury
- Cell membrane damage irreversible at <-1°C

## Evidence-Based Prognostication

### HOPE Score Development

**Derivation Study:**
- International Hypothermia Registry
- 286 patients with hypothermic arrest treated with ECLS
- Multivariable logistic regression

**Score Components:**
\`\`\`
Age (years)
Sex (female = 0, male = 1)
Asphyxia (no = 0, yes = 1)
CPR duration (minutes)
Serum potassium (mEq/L)

Online calculator: www.hypothermiascore.org
\`\`\`

**Interpretation:**
- Predicts probability of survival with favorable neurological outcome
- <10% predicted: Consider not offering ECLS
- >10%: Consider ECLS if available
- Not absolute - clinical judgment essential

### Potassium as Prognostic Marker

**Mechanism:**
- Cellular death releases intracellular K+
- Reflects duration and severity of anoxia
- Indicator of irreversible cell damage

**Thresholds:**
- K+ <8 mEq/L: Favorable, proceed with ECLS
- K+ 8-12 mEq/L: Guarded prognosis
- K+ >12 mEq/L: Generally incompatible with survival

**Caveats:**
- Hemolysis falsely elevates K+
- Muscle crush (avalanche) elevates K+
- Consider mechanism when interpreting

### Other Biomarkers

**Lactate:**
- Marker of tissue hypoperfusion
- Extreme elevation suggests prolonged arrest
- Less validated than potassium

**Ammonia:**
- May indicate brain death
- Limited data in hypothermia

## ECMO Decision Algorithms

### Candidacy Assessment

\`\`\`
Hypothermic Cardiac Arrest
          |
          v
Contraindications?
(trauma incompatible with life, K+>12, obvious death signs)
          |
          +---> Yes: Do not resuscitate
          |
          +---> No:
                  |
                  v
              Initiate CPR
              Rewarm to 30°C
                  |
                  v
              ROSC?
                  |
                  +---> Yes: Continue standard care
                  |
                  +---> No: ECMO candidate?
                            |
                            v
                        Calculate HOPE score
                            |
                            +---> >10%: Offer ECMO
                            +---> <10%: Consider alternatives
\`\`\`

### Transport Considerations

**ECMO-Capable Centers:**
- Pre-hospital notification essential
- Ongoing CPR during transport
- Consider on-scene ECMO cannulation (select systems)
- Do not delay transport for field rewarming

### Post-ECMO Management

**Rewarming Phase:**
- Target 1°C/hour initially
- Manage arrhythmias expectantly
- Address coagulopathy after rewarming
- Vasopressor support often needed

**Neuroprognostication:**
- Delay 72+ hours post-rewarming
- Standard testing (EEG, SSEP, MRI)
- Cold may provide neuroprotection

## Specialized Scenarios

### Hypothermic Near-Drowning

**Prognostic Factors:**
\`\`\`
Favorable:
- Cold water (<10°C)
- Short submersion (<60 min)
- Hypothermia preceded anoxia
- Young age
- Bystander CPR

Unfavorable:
- Warm water (>20°C)
- Prolonged submersion
- Anoxia preceded hypothermia
- Lack of mammalian dive reflex
\`\`\`

### Avalanche Burial

**Algorithm:**
\`\`\`
Burial time <60 minutes:
- Full resuscitation efforts
- ECMO if indicated

Burial time >60 minutes:
- Check airway status
- Patent airway: Resuscitate
- Obstructed airway: K+ <8? Attempt resuscitation
                     K+ >8? Generally futile

Core temp and K+ guide ECMO decision
\`\`\`

### Urban Hypothermia

**Different Population:**
- Often intoxication component
- Chronic disease burden
- Social determinants
- Less likely isolated cold exposure
- Worse outcomes than outdoor/adventure

## Research Frontiers

### Therapeutic Hypothermia Insights

**Parallels to Accidental Hypothermia:**
- Similar protective mechanisms
- Rewarming injury mechanisms
- Optimal rewarming rate uncertain

### Improved Prognostication

**Future Directions:**
- Multi-biomarker panels
- Metabolomic signatures
- Point-of-care testing
- AI-assisted decision support

### ECMO Optimization

**Ongoing Research:**
- Optimal flow rates
- Blood pressure targets
- Anticoagulation protocols
- Neuroprotection strategies`,
      keyTerms: [
        { term: 'transient outward current', definition: 'Ito potassium current responsible for Osborn wave generation' },
        { term: 'ECLS', definition: 'Extracorporeal life support - inclusive term for ECMO and cardiopulmonary bypass' },
        { term: 'ROSC', definition: 'Return of spontaneous circulation' },
        { term: 'reperfusion injury', definition: 'Cellular damage occurring when blood flow is restored after ischemia' },
        { term: 'CMRo2', definition: 'Cerebral metabolic rate of oxygen consumption' },
      ],
      clinicalNotes: `Clinical Pearls for Hypothermia:
1. HOPE score >10% indicates ECMO should be considered
2. K+ >12 mEq/L generally precludes survival - do not transport for ECMO
3. Avalanche victims with obstructed airway for >60 min rarely survive
4. Cold water drowning has better prognosis than warm - resuscitate longer
5. Lab coagulation tests underestimate actual coagulopathy
6. Defibrillation often fails <30°C - single attempt then rewarm
7. Drug metabolism slowed - consider reduced dosing/intervals
8. Osborn wave height correlates with temperature
9. Rewarming acidosis is expected - usually self-correcting
10. "Not dead until warm and dead" applies to select patients, not all`,
    },
  },

  media: [
    {
      id: 'hypothermia-staging',
      type: 'diagram',
      filename: 'hypothermia-staging.svg',
      title: 'Hypothermia Staging and Management',
      description: 'Flowchart of Swiss staging system with corresponding treatments',
    },
    {
      id: 'osborn-wave-ecg',
      type: 'image',
      filename: 'osborn-wave.jpg',
      title: 'Osborn Wave ECG',
      description: 'ECG showing characteristic J waves of hypothermia',
    },
  ],

  citations: [
    {
      id: 'wms-hypothermia-guidelines',
      type: 'article',
      title: 'Wilderness Medical Society Clinical Practice Guidelines for the Out-of-Hospital Evaluation and Treatment of Accidental Hypothermia',
      source: 'Wilderness & Environmental Medicine',
    },
    {
      id: 'hope-score',
      type: 'article',
      title: 'Hypothermia Outcome Prediction After Extracorporeal Life Support for Hypothermic Cardiac Arrest',
      source: 'Resuscitation',
    },
  ],

  crossReferences: [
    { targetId: 'wilderness-frostbite', targetType: 'condition', relationship: 'related', label: 'Frostbite' },
    { targetId: 'wilderness-cold-water-immersion', targetType: 'condition', relationship: 'related', label: 'Cold Water Immersion' },
    { targetId: 'wilderness-avalanche-injury', targetType: 'condition', relationship: 'see-also', label: 'Avalanche Injury' },
  ],

  tags: {
    systems: ['cardiovascular', 'neurological', 'thermoregulatory'],
    topics: ['wilderness-medicine', 'emergency-medicine', 'critical-care'],
    keywords: ['hypothermia', 'cold exposure', 'ECMO', 'rewarming', 'resuscitation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency-medicine', 'critical-care'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hypothermia;
