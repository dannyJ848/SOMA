/**
 * Heat Illness - Comprehensive Educational Content
 *
 * Covers the spectrum of exertional heat illness from heat cramps
 * to exertional heat stroke, including prevention and management.
 */

import { EducationalContent } from '../../types';

export const heatIllness: EducationalContent = {
  id: 'sports-med-heat-illness',
  type: 'condition',
  name: 'Heat Illness',
  alternateNames: ['Exertional Heat Illness', 'Heat-Related Illness in Athletes'],

  levels: {
    1: {
      level: 1,
      summary: 'Heat illness happens when your body gets too hot during exercise and can\'t cool down properly. It can range from mild muscle cramps to a serious condition called heat stroke.',
      explanation: `## What Is Heat Illness?

When you exercise in hot weather, your body works hard to stay cool. Sometimes it can't keep up, and you can get sick from the heat.

### Types of Heat Illness (from mild to serious)

**Heat Cramps**
- Painful muscle cramps during or after exercise
- Usually in legs or stomach
- Caused by losing salt in sweat

**Heat Exhaustion**
- Feeling very tired and weak
- Heavy sweating
- Pale, cool skin
- Headache, dizziness, or nausea
- Still sweating and aware of surroundings

**Heat Stroke - EMERGENCY!**
- Body temperature gets dangerously high
- May stop sweating
- Confused or acting strange
- Can pass out
- THIS IS A MEDICAL EMERGENCY - CALL 911!

### Warning Signs to Watch For

- Feeling very tired
- Headache
- Dizziness
- Muscle cramps
- Nausea or vomiting
- Feeling confused

### How to Stay Safe

**Before Exercise:**
- Drink plenty of water
- Wear light-colored, loose clothing
- Check the weather

**During Exercise:**
- Take breaks in the shade
- Drink water regularly
- Listen to your body - if you feel bad, stop!

**If Someone Gets Too Hot:**
1. Move them to a cool, shady place
2. Have them drink cool water
3. Put cool water on their skin
4. If they seem confused or pass out - CALL 911!`,
      keyTerms: [
        { term: 'heat cramps', definition: 'Painful muscle cramps caused by exercising in hot weather and losing salt through sweat' },
        { term: 'heat exhaustion', definition: 'A condition where your body gets overheated and you feel very tired, dizzy, and sick' },
        { term: 'heat stroke', definition: 'A very serious emergency when your body temperature gets dangerously high' },
      ],
      analogies: [
        'Your body is like a car engine - it can overheat if it works too hard in hot conditions without enough cooling.',
        'Sweating is like a sprinkler system for your body, but if you run out of water, it can\'t work.',
      ],
      examples: [
        'A soccer player who gets muscle cramps during a hot game might be getting heat cramps from losing salt in sweat.',
        'A runner who feels very tired, dizzy, and nauseous during a hot race may have heat exhaustion and needs to stop and cool down.',
      ],
    },
    2: {
      level: 2,
      summary: 'Heat illness represents a spectrum of conditions from heat cramps to life-threatening heat stroke, occurring when the body\'s heat production exceeds its cooling capacity during exercise in warm conditions.',
      explanation: `## The Heat Illness Spectrum

### Heat Cramps
**What Happens:**
- Painful muscle spasms during or after exercise
- Often in calves, thighs, or abdomen
- Related to sodium depletion and fatigue

**Treatment:**
- Rest in a cool area
- Stretch affected muscles gently
- Drink fluids with electrolytes
- Avoid vigorous activity until resolved

### Heat Syncope
**What Happens:**
- Fainting or near-fainting
- Usually when standing after exercise
- Blood pools in legs due to vasodilation

**Treatment:**
- Lie down with legs elevated
- Move to cool environment
- Hydrate
- Gradual return to standing

### Heat Exhaustion
**Symptoms:**
- Heavy sweating
- Weakness, fatigue
- Headache
- Nausea, vomiting
- Dizziness
- Core temperature 38-40°C (100.4-104°F)
- Still sweating, mental function intact

**Treatment:**
- Stop exercise immediately
- Move to cool, shaded area
- Remove excess clothing
- Cool skin with water/fans
- Drink cool fluids if alert
- Monitor for worsening

### Exertional Heat Stroke (EHS)
**Characteristics:**
- Core temperature >40°C (104°F)
- Central nervous system dysfunction
  - Confusion, disorientation
  - Combativeness
  - Seizures
  - Loss of consciousness
- May or may not be sweating

**THIS IS A MEDICAL EMERGENCY!**

**Treatment:**
1. Call 911
2. Begin aggressive cooling IMMEDIATELY
   - Cold water immersion is best
   - Ice packs to neck, armpits, groin if immersion not available
3. Do NOT delay cooling for transport
4. Monitor airway and breathing

### Risk Factors

**Environmental:**
- High temperature
- High humidity
- Direct sun exposure
- Limited air movement

**Individual:**
- Poor fitness
- Not acclimatized to heat
- Dehydration
- Recent illness
- Sleep deprivation
- Certain medications
- Obesity
- Previous heat illness

### Prevention Strategies

**Acclimatization:**
- Gradually increase heat exposure over 10-14 days
- Start with shorter, lighter sessions
- Allow body to adapt

**Hydration:**
- Start exercise well-hydrated
- Drink regularly during exercise
- Monitor urine color

**Environmental Modifications:**
- Schedule activities for cooler parts of day
- Use shade when available
- Modify activity based on heat index

**Recognition:**
- Know the warning signs
- Buddy system - watch each other
- Coaches/supervisors trained in recognition`,
      keyTerms: [
        { term: 'exertional heat stroke', definition: 'Medical emergency where core temperature exceeds 40°C with central nervous system dysfunction during exercise' },
        { term: 'heat acclimatization', definition: 'Gradual adaptation to exercise in heat over 10-14 days, improving thermal tolerance and sweating efficiency' },
        { term: 'cold water immersion', definition: 'Most effective cooling method for heat stroke - immersing the body in cold water' },
        { term: 'heat index', definition: 'Combined measure of temperature and humidity that indicates how hot it actually feels' },
      ],
      analogies: [
        'Heat acclimatization is like training your body\'s cooling system to work more efficiently, similar to how a car radiator works better after it\'s properly maintained.',
        'Heat exhaustion is like a warning light - the system is stressed but still working. Heat stroke is like the engine seizing - immediate action needed.',
      ],
    },
    3: {
      level: 3,
      summary: 'Exertional heat illness represents a clinical continuum requiring understanding of thermoregulatory physiology, risk stratification, and evidence-based treatment protocols with emphasis on rapid cooling for exertional heat stroke.',
      explanation: `## Thermoregulatory Physiology

### Heat Balance During Exercise
**Heat Production:**
- Metabolic heat: VO2 (L/min) × 20 kJ/L × exercise efficiency factor
- High-intensity exercise: 15-20x resting metabolic rate
- Environmental heat gain adds to load

**Heat Dissipation:**
- Evaporation: Primary mechanism during exercise
- Radiation, convection, conduction: Variable contribution
- Evaporative efficiency decreases as humidity rises

### Failure of Thermoregulation
**Progression to Heat Illness:**
1. Heat storage rate exceeds dissipation capacity
2. Core temperature rises progressively
3. Cardiovascular strain increases (competing demands)
4. CNS dysfunction occurs at critical temperatures
5. Multi-organ effects if cooling delayed

## Clinical Classification

### Heat Cramps
- Involuntary muscle contractions
- Sodium depletion primary mechanism
- May occur hours after exercise
- Treatment: Oral salt replacement, rest
- Prevention: Adequate sodium intake for heavy sweaters

### Heat Exhaustion
**Diagnostic Criteria:**
- Core temperature: 38.5-40°C
- Symptoms: Fatigue, weakness, nausea, headache
- Signs: Sweating present, pale skin, tachycardia
- Mental status: Normal to mildly altered

**Management Protocol:**
1. Remove from heat, cease exercise
2. Position supine with legs elevated
3. Begin active cooling (not as aggressive as EHS)
4. Oral rehydration if fully alert
5. Monitor for 30-60 minutes
6. Transport if not improving

### Exertional Heat Stroke
**Diagnostic Criteria:**
- Core temperature >40°C (104°F)
- CNS dysfunction (hallmark)
  - Altered mental status
  - Confusion, combativeness
  - Ataxia
  - Seizures
  - Coma
- Multi-organ involvement possible

**Key Point:** CNS dysfunction + high core temperature = heat stroke until proven otherwise. Don't wait for temperature >104°F if CNS symptoms present.

## EHS Treatment Protocol

### The "Cool First, Transport Second" Principle
- Survival depends on duration of hyperthermia
- Cooling in field is faster than during transport
- Goal: Core temperature <39°C within 30 minutes

### Cold Water Immersion (CWI)
**Gold Standard Treatment:**
- Tub filled with ice water (2-15°C)
- Immerse body to neck level
- Cooling rate: ~0.2°C per minute
- Remove when core temp reaches 38.5-39°C

**If CWI Not Available:**
- Rotate ice water-soaked towels over entire body
- Ice packs to neck, axillae, groin
- Cold water dousing with fanning
- Any cooling is better than none

### Monitoring During Cooling
- Rectal temperature (most accurate for core)
- Airway, breathing, circulation
- Mental status changes (improvement expected with cooling)
- Watch for shivering (may indicate overcooling)

### Complications to Monitor
- Rhabdomyolysis
- Acute kidney injury
- Disseminated intravascular coagulation (DIC)
- Hepatic injury
- Cardiac arrhythmias

## Risk Stratification

### High-Risk Individuals
| Factor | Mechanism |
|--------|-----------|
| Poor fitness | Lower heat tolerance, less efficient sweating |
| Not acclimatized | Inadequate thermal adaptation |
| Previous heat illness | May have impaired thermoregulation |
| Recent illness | Fever, dehydration, reduced tolerance |
| Sleep deprivation | Impaired thermoregulation |
| Obesity | Higher heat production, insulation |
| Sickle cell trait | Sickling risk with heat/dehydration |
| Certain medications | Diuretics, anticholinergics, stimulants |

### Environmental Risk Assessment
**WBGT (Wet Bulb Globe Temperature):**
| WBGT (°C) | Flag Color | Recommendations |
|-----------|------------|-----------------|
| <18 | Green | Normal activity |
| 18-23 | Yellow | Caution, monitor |
| 23-28 | Orange | Increase rest, limit intensity |
| 28-30 | Red | Limit activity, more rest |
| >30 | Black | Cancel or postpone |

## Prevention Strategies

### Heat Acclimatization Protocol
**Physiological Adaptations:**
- Increased plasma volume (days 3-6)
- Earlier onset of sweating
- Increased sweat rate
- Decreased sweat sodium concentration
- Improved cardiovascular stability
- Lower core temperature at given workload

**Protocol:**
- 10-14 days of progressive heat exposure
- Begin with 30-40% of typical training
- Gradually increase duration and intensity
- Maintain fitness training in cooler conditions

### Return to Activity After Heat Illness
**Heat Exhaustion:**
- Same-day return possible if fully recovered
- Next-day medical clearance recommended

**Exertional Heat Stroke:**
- No exercise until cleared by physician
- Laboratory evaluation (renal, hepatic, coagulation)
- Gradual return over weeks with close monitoring
- Heat tolerance testing may be indicated`,
      keyTerms: [
        { term: 'WBGT', definition: 'Wet Bulb Globe Temperature; environmental heat stress index combining temperature, humidity, and radiant heat load' },
        { term: 'rhabdomyolysis', definition: 'Breakdown of muscle tissue releasing myoglobin into blood; can cause kidney injury; common EHS complication' },
        { term: 'cold water immersion', definition: 'Gold standard EHS treatment achieving cooling rates of ~0.2°C/min; immersion in ice water to neck level' },
        { term: 'heat tolerance testing', definition: 'Controlled laboratory assessment of thermoregulatory function after EHS to clear for return to exercise' },
      ],
      clinicalNotes: 'Key clinical principle: "Cool first, transport second." Every minute of delay in cooling increases morbidity and mortality. Rectal temperature is the only accurate field measure of core temperature; tympanic, oral, and axillary are unreliable. Survival rates >95% when core temperature reduced to <40°C within 30 minutes.',
    },
    4: {
      level: 4,
      summary: 'Advanced exertional heat illness management integrates thermoregulatory pathophysiology, inflammatory cascade understanding, organ-specific dysfunction patterns, and evidence-based emergency protocols including cold water immersion technique optimization and post-EHS recovery algorithms.',
      explanation: `## Pathophysiology of Exertional Heat Stroke

### Molecular Mechanisms
**Heat Shock Response:**
- Heat shock proteins (HSPs) upregulated
- HSP70 critical for thermal protection
- Provides cellular thermotolerance
- May be overwhelmed with severe/prolonged exposure

**Inflammatory Cascade:**
- Gut barrier dysfunction with hyperthermia
- Endotoxin (LPS) translocation into circulation
- Systemic inflammatory response (SIRS-like)
- Cytokine storm: IL-1, IL-6, TNF-α elevation
- Resembles sepsis pathophysiology

**Cellular Injury:**
- Protein denaturation above 42°C
- Membrane lipid phase transitions
- Mitochondrial dysfunction
- Apoptotic and necrotic cell death

### Coagulation Cascade Activation
- Endothelial damage exposes tissue factor
- Activation of coagulation cascade
- Platelet activation and consumption
- DIC possible in severe cases
- Microthrombi contribute to organ injury

### Organ-Specific Pathophysiology

**Central Nervous System:**
- Most temperature-sensitive organ
- Cerebral edema possible
- Blood-brain barrier dysfunction
- Clinical manifestations: Confusion → seizures → coma
- Permanent neurological sequelae possible if cooling delayed

**Cardiovascular:**
- Tachycardia with decreased SVR
- High-output state initially
- May progress to cardiovascular collapse
- Arrhythmias from electrolyte disturbances
- Myocardial injury possible (troponin elevation)

**Hepatic:**
- Centrilobular necrosis from ischemia
- AST/ALT elevations common
- Peak at 24-48 hours
- Fulminant hepatic failure possible

**Renal:**
- Acute tubular necrosis
- Rhabdomyolysis-induced injury (myoglobin)
- Pre-renal component from dehydration
- May require temporary dialysis

**Hematologic:**
- DIC with consumption of factors
- Thrombocytopenia
- Microangiopathic hemolytic anemia possible

## Advanced EHS Management

### Cold Water Immersion Optimization
**Technique Details:**
- Water temperature: 2-15°C (colder is faster)
- Full body immersion to neck level
- Continuous stirring of water
- Monitor patient continuously (airway, mental status)
- Cooling rate: 0.15-0.35°C/minute
- Target: Core <39°C (remove before 38°C to prevent rebound)

**Alternatives When CWI Not Available:**
| Method | Cooling Rate | Notes |
|--------|-------------|-------|
| Rotating ice towels | 0.10-0.15°C/min | Change every 2-3 min |
| Cold water dousing + fan | 0.08-0.12°C/min | Evaporative + convective |
| Ice packs (neck, axillae, groin) | 0.05-0.08°C/min | Less effective |
| Cooling blankets | 0.03-0.06°C/min | Much slower, hospital setting |

### Temperature Monitoring
**Rectal Temperature:**
- Gold standard for core temperature
- Insert probe 15 cm
- Continuous monitoring preferred
- Lag during rapid temperature changes (~2-3 min)

**Esophageal Temperature:**
- More responsive to rapid changes
- Hospital/research setting
- Good correlation with brain temperature

**Unreliable Methods:**
- Tympanic: Cooling water may affect
- Oral: Not practical during cooling
- Axillary: Does not reflect core
- Temporal artery: Poor accuracy in EHS

### Pharmacological Considerations
**Avoid Antipyretics:**
- Ineffective for EHS (not prostaglandin-mediated fever)
- May worsen hepatic injury (acetaminophen)
- May worsen coagulopathy (NSAIDs)

**Avoid Dantrolene:**
- Unless malignant hyperthermia suspected
- No benefit for EHS

**Supportive Medications:**
- IV fluids: Isotonic crystalloid, avoid aggressive over-resuscitation
- Benzodiazepines: For shivering (impairs cooling) or seizures
- Vasopressors: If hypotension despite fluids

## Post-EHS Care and Recovery

### Hospital Admission
**Initial Workup:**
- CBC, CMP, LFTs, coagulation panel
- Creatine kinase (rhabdomyolysis)
- Urinalysis (myoglobinuria)
- Troponin, ECG
- Lactate

**Monitoring:**
- ICU admission for severe cases
- Serial labs (CK peaks at 24-72 hours)
- Urine output (renal function)
- Mental status

### Complications Management
**Rhabdomyolysis:**
- Aggressive IV fluids
- Target urine output 200-300 mL/hour
- Consider bicarbonate for urine alkalinization
- Monitor for compartment syndrome

**Acute Kidney Injury:**
- Nephrology consultation
- Dialysis if indicated
- Usually recovers over days-weeks

**DIC:**
- Supportive care
- FFP, platelets if bleeding
- Hematology consultation

### Return to Activity Protocol
**Timeline:**
1. Days 1-7: Rest, monitor for complications
2. Weeks 1-4: Gradual activity in climate-controlled environment
3. Week 4+: Progressive heat exposure if cleared
4. Variable: Full return based on heat tolerance test

**Heat Tolerance Test:**
- Controlled chamber exercise
- Monitor thermoregulatory response
- Compare to normative data
- Determines physiological recovery

**Psychological Considerations:**
- Anxiety about return to heat
- Education about safe practices
- Gradual exposure helps confidence

## Sickle Cell Trait Considerations
**Increased Risk:**
- Sickling exacerbated by: Heat, dehydration, altitude, acidosis
- "Exertional sickling" syndrome
- Sudden collapse during exertion
- May mimic or overlap with EHS

**Prevention:**
- Aggressive hydration
- Adequate rest during intense training
- Build intensity gradually
- Recognize early symptoms (cramping, weakness)`,
      keyTerms: [
        { term: 'endotoxemia', definition: 'Presence of bacterial lipopolysaccharide (LPS) in blood; occurs in EHS due to gut barrier dysfunction, driving inflammatory cascade' },
        { term: 'DIC', definition: 'Disseminated intravascular coagulation; widespread activation of coagulation with consumption of platelets and factors, potential EHS complication' },
        { term: 'centrilobular necrosis', definition: 'Liver cell death in central zones of hepatic lobules; pattern seen in heat stroke due to ischemia and direct thermal injury' },
        { term: 'heat tolerance testing', definition: 'Standardized exercise test in controlled hot environment to assess thermoregulatory function recovery after EHS' },
        { term: 'exertional sickling', definition: 'Collapse syndrome in sickle cell trait carriers during intense exercise; red cell sickling causes ischemia and potentially death' },
      ],
      clinicalNotes: 'Critical points: 1) EHS mortality correlates directly with duration of hyperthermia - every minute matters. 2) Rectal temperature required - do not rely on other methods. 3) Antipyretics do not work for EHS. 4) Dantrolene not indicated. 5) Athletes with sickle cell trait require modified protocols. 6) Post-EHS return to activity must be gradual with consideration of heat tolerance testing.',
    },
    5: {
      level: 5,
      summary: 'Elite exertional heat illness management encompasses molecular immunopathology, genomic susceptibility factors, advanced resuscitation strategies, biomarker-guided prognostication, and comprehensive systems approaches to prevention including policy development and technological innovations.',
      explanation: `## Molecular Immunopathology

### Gut-Derived Endotoxemia Model
**Mechanism:**
- Exercise + heat → splanchnic hypoperfusion (80% reduction)
- Intestinal epithelial tight junction disruption
- LPS (endotoxin) translocation into portal circulation
- Kupffer cell activation in liver
- Systemic cytokine release

**Cytokine Profile:**
- Pro-inflammatory: IL-1β, IL-6, TNF-α, IL-8
- Anti-inflammatory: IL-10, IL-1RA (compensatory)
- Balance determines outcome
- Sustained pro-inflammatory → organ dysfunction

### Heat Shock Protein Response
**Protective Role:**
- HSP70, HSP90: Molecular chaperones
- Prevent protein aggregation
- Aid protein refolding
- Anti-apoptotic signaling

**Failure in EHS:**
- HSP response may be inadequate
- Genetic variation in HSP genes affects response
- Prior heat acclimatization upregulates HSPs
- Potential therapeutic target

### Coagulopathy Mechanisms
**Tissue Factor Pathway:**
- Endothelial damage exposes TF
- Factor VIIa activation
- Thrombin generation
- Fibrin deposition in microvasculature

**Protein C Pathway Dysfunction:**
- Reduced activated protein C
- Impaired anticoagulant response
- Similarity to sepsis coagulopathy

## Genetic Susceptibility

### Heat Tolerance Genes
**HSP70 (HSPA1A/HSPA1L):**
- Polymorphisms affect expression levels
- Lower HSP70 → potentially higher EHS risk

**CRYAB (Alpha-B Crystallin):**
- Small heat shock protein
- Cardiac and muscle protection

**Cytokine Polymorphisms:**
- IL-6, TNF-α promoter variants
- May affect inflammatory response magnitude

### Malignant Hyperthermia Overlap
**RYR1 Mutations:**
- Ryanodine receptor dysfunction
- Abnormal calcium release in skeletal muscle
- Classic trigger: Anesthetics (succinylcholine, volatiles)
- Heat + exertion may trigger in susceptible individuals

**Overlap Syndrome:**
- Some RYR1 variants associated with exertional heat illness
- Testing indicated in atypical presentations
- Family history may be informative

### Sickle Cell Trait (SCT)
**SPTB Gene:**
- Single nucleotide polymorphism
- HbS under conditions of:
  - Hypoxia
  - Acidosis
  - Dehydration
  - Hyperthermia

**Risk Quantification:**
- NCAA data: SCT athletes 37x higher sudden death risk
- Most deaths during exertional activities
- Military data confirms elevated risk

## Advanced Resuscitation Strategies

### Chemically-Induced Hypothermia (Experimental)
**Concepts:**
- Pharmacological cooling adjuncts
- Hydrogen sulfide: Metabolic suppression
- Neurotensin analogs: Thermoregulatory modulation
- Currently experimental only

### Extracorporeal Cooling
**ECMO/CPB:**
- For refractory hyperthermia
- Cardiac arrest cases
- Provides both cooling and organ support
- Case reports of success

**Continuous Renal Replacement Therapy (CRRT):**
- Can provide cooling
- Addresses AKI simultaneously
- Rate of cooling similar to CWI

### Targeted Temperature Management Post-Arrest
- If cardiac arrest occurs
- Standard post-arrest TTM protocols
- Core temperature 32-36°C
- Different from EHS cooling goal

## Biomarker-Guided Management

### Prognostic Markers
**Lactate:**
- Elevated with tissue hypoperfusion
- Serial trending useful
- >4 mmol/L associated with worse outcomes

**Creatine Kinase:**
- Peaks 24-72 hours post-EHS
- CK >5,000 U/L: Significant rhabdomyolysis
- CK >15,000 U/L: High AKI risk

**Liver Enzymes:**
- AST/ALT peak 24-48 hours
- Severe elevation (>1000) indicates hepatic injury
- Monitor for coagulopathy

### Novel Biomarkers (Research)
**Procalcitonin:**
- Elevated in EHS (endotoxemia)
- May help differentiate from sepsis

**S100B:**
- Marker of CNS injury
- May correlate with neurological outcome

**Heat Shock Proteins:**
- Circulating HSP70 levels
- May indicate cellular stress response

## Systems Approach to Prevention

### Policy Development
**Sports Organization Guidelines:**
- WBGT monitoring requirements
- Activity modification thresholds
- Mandatory hydration policies
- Recognition and response protocols
- Emergency action plans

**Implementation Challenges:**
- Enforcement variability
- Resource limitations
- Cultural resistance
- Balance with competition demands

### Technology Integration
**Environmental Monitoring:**
- Automated WBGT stations
- Real-time app-based alerts
- Integration with scheduling systems

**Athlete Monitoring:**
- Wearable core temperature (GI pills)
- Heart rate variability for readiness
- Hydration status sensors
- Machine learning for risk prediction

### Emergency Response Systems
**Cold Water Immersion Availability:**
- Mandatory at high-risk events
- Pre-positioned tubs
- Ice supply logistics
- Trained personnel

**Rectal Temperature Capability:**
- Equipment on-site
- Trained medical staff
- Protocol integration

## Emerging Research Directions

### Preconditioning Strategies
**Heat Preconditioning:**
- Controlled heat exposure
- Upregulates HSPs
- Improves subsequent heat tolerance
- Optimal protocols under investigation

**Pharmacological Preconditioning:**
- HSP inducers (e.g., geranylgeranylacetone)
- Anti-inflammatory agents
- Currently experimental

### Microbiome Considerations
- Gut microbiome may influence barrier function
- Probiotic supplementation for gut integrity
- Research ongoing

### Personalized Risk Assessment
- Genetic profiling for susceptibility
- Individual thermal tolerance profiling
- Biomarker-based readiness assessment
- AI-driven integration of multi-factor data

## Special Populations

### Athletes with Disabilities
- Thermoregulatory impairment in spinal cord injury
- Autonomic dysfunction affects sweating
- Modified cooling strategies may be needed

### Transgender Athletes
- Hormone therapy effects on thermoregulation
- Limited research currently
- Individualized assessment recommended

### Pediatric Considerations
- Children have higher surface area:mass ratio
- May have lower sweat rates
- Activity modification thresholds may differ

### Older Adults
- Reduced sweat gland function
- Impaired thirst sensation
- Increased medication interactions
- Lower thermoregulatory reserve`,
      keyTerms: [
        { term: 'gut-derived endotoxemia', definition: 'Translocation of bacterial lipopolysaccharide from gut into systemic circulation due to intestinal barrier dysfunction; key driver of EHS inflammatory response' },
        { term: 'exertional sickling', definition: 'Red blood cell sickling in sickle cell trait carriers triggered by intense exercise, dehydration, heat, and altitude; can cause sudden collapse and death' },
        { term: 'heat preconditioning', definition: 'Controlled heat exposure prior to performance to upregulate protective heat shock proteins and improve thermal tolerance' },
        { term: 'RYR1', definition: 'Ryanodine receptor 1 gene; mutations cause malignant hyperthermia and may increase susceptibility to exertional heat illness' },
        { term: 'ECMO', definition: 'Extracorporeal membrane oxygenation; can provide cooling and organ support in severe refractory hyperthermia or cardiac arrest' },
      ],
      clinicalNotes: `Elite-level clinical considerations:
1. Genomic testing for RYR1 variants indicated in atypical EHS presentations or family history of exertional heat illness/MH
2. Sickle cell trait athletes require modified training protocols - NCAA and military have specific guidelines
3. Biomarker panels (CK, LFTs, coagulation, lactate) guide management intensity and prognosis
4. Post-EHS return to activity requires individualized approach with consideration of heat tolerance testing
5. System-wide prevention requires policy, technology, and personnel integration
6. Research on preconditioning and personalized risk assessment may transform prevention strategies`,
    },
  },

  media: [
    {
      id: 'heat-illness-spectrum',
      type: 'diagram',
      filename: 'heat-illness-spectrum.svg',
      title: 'Heat Illness Spectrum',
      description: 'Clinical progression from heat cramps through heat stroke',
    },
  ],

  citations: [
    {
      id: 'nata-heat-illness',
      type: 'article',
      title: 'National Athletic Trainers\' Association Position Statement: Exertional Heat Illnesses',
      source: 'Journal of Athletic Training',
    },
    {
      id: 'casa-ehs',
      type: 'article',
      title: 'Cold Water Immersion: The Gold Standard for Exertional Heatstroke Treatment',
      authors: ['Casa, D.J.', 'McDermott, B.P.', 'Lee, E.C.'],
      source: 'Exercise and Sport Sciences Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-hydration-for-exercise', targetType: 'concept', relationship: 'related', label: 'Hydration for Exercise' },
    { targetId: 'sports-med-exercise-in-extremes', targetType: 'concept', relationship: 'related', label: 'Exercise in Extreme Environments' },
    { targetId: 'sports-med-acute-injury-assessment', targetType: 'concept', relationship: 'related', label: 'Acute Injury Assessment' },
  ],

  tags: {
    systems: ['cardiovascular', 'nervous', 'integumentary', 'renal'],
    topics: ['sports-medicine', 'heat-illness', 'emergency-medicine'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default heatIllness;
