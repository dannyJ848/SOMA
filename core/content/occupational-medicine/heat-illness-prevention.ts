/**
 * Heat Illness Prevention - Comprehensive Educational Content
 *
 * Covers the spectrum of heat-related illness from heat cramps through
 * heat stroke, thermoregulation physiology, workplace prevention strategies,
 * and regulatory frameworks for outdoor and indoor heat exposure.
 */

import { EducationalContent } from '../types';

export const heatIllnessPreventionContent: EducationalContent = {
  id: 'topic-heat-illness-prevention',
  type: 'topic',
  name: 'Heat Illness Prevention',
  nameEs: 'Prevencion de Enfermedades por Calor',
  alternateNames: ['Heat Stress Prevention', 'Heat-Related Illness Prevention'],

  levels: {
    1: {
      level: 1,
      summary: 'Working in hot conditions can make you very sick. Heat illness happens when your body cannot cool itself down fast enough.',
      explanation: `Your body is like a car engine - when it works hard, it heats up. Normally, your body cools itself by sweating. But when it is very hot or humid outside, or you are working really hard, your body may not be able to cool down fast enough. That is when heat illness happens.

**Types of heat illness (from mild to severe):**

1. **Heat cramps**: Painful muscle cramps in your legs, arms, or stomach from losing too much salt through sweat
2. **Heat exhaustion**: You feel very tired, dizzy, nauseous, and sweat heavily. Your body temperature goes up but is still below 104°F
3. **Heat stroke**: This is a medical emergency! Your body temperature goes above 104°F and your brain stops working properly - you may be confused, pass out, or have seizures

**Who is most at risk?**
- Workers who are new to working in the heat (the first 2 weeks are most dangerous)
- People who do not drink enough water
- Workers wearing heavy protective clothing
- Anyone doing very hard physical work outdoors
- People who are overweight or have heart conditions

**How to prevent heat illness:**
- **Water**: Drink a cup of water every 15-20 minutes, even if you are not thirsty
- **Rest**: Take breaks in the shade or a cool area
- **Shade**: Work in the shade when possible
- **Watch out for each other**: Use the buddy system to check on coworkers

**What to do if someone has heat illness:**
- Move them to a cool, shaded area immediately
- Give them water to drink if they are awake and alert
- Cool them down with cold water, ice, or wet towels
- Call 911 right away if they are confused, pass out, or stop sweating`,
      keyTerms: [
        { term: 'heat exhaustion', definition: 'When your body overheats and cannot cool down, causing dizziness, nausea, and heavy sweating' },
        { term: 'heat stroke', definition: 'A dangerous emergency when your body temperature rises above 104°F and your brain stops working right' },
        { term: 'acclimatization', definition: 'The process of getting used to working in the heat over 1-2 weeks, which makes your body better at cooling itself' },
        { term: 'dehydration', definition: 'When your body loses more water than you drink, making it harder for your body to cool down and work properly' },
        { term: 'buddy system', definition: 'A safety practice where coworkers watch out for each other for signs of heat illness' },
      ],
      analogies: [
        'Your body is like an air conditioner - sweating is how it cools down. But just like an AC unit on the hottest day of the year, sometimes your body cannot keep up with the heat.',
        'Getting used to the heat (acclimatization) is like training for a race - you would not run a marathon without practicing first. Your body needs time to adjust to working in hot conditions.',
      ],
      patientCounselingPoints: [
        'Drink water BEFORE you feel thirsty - thirst means your body is already running low on water.',
        'The first two weeks of working in the heat are the most dangerous - take it slow and let your body adjust.',
        'If you feel dizzy, sick to your stomach, or confused in the heat, STOP working immediately and tell someone.',
        'Dark-colored urine means you need to drink more water. Your urine should be light yellow.',
        'Never leave someone with heat stroke alone - this is a life-threatening emergency that needs 911.',
        'Alcohol and caffeine can make dehydration worse - drink extra water if you consume them.',
      ],
    },
    2: {
      level: 2,
      summary: 'Heat-related illness ranges from heat cramps to life-threatening heat stroke, with prevention centered on hydration, acclimatization, work-rest cycles, and employer-provided shade and water.',
      explanation: `## Understanding Heat Illness

### How Your Body Handles Heat

Your body maintains a core temperature around 98.6°F (37°C) through several mechanisms:
- **Sweating**: Evaporation of sweat cools the skin (most effective method)
- **Blood vessel dilation**: More blood flows near the skin surface to release heat
- **Behavioral**: Seeking shade, reducing activity

When these mechanisms are overwhelmed, heat illness occurs.

### The Heat Illness Spectrum

| Condition | Temperature | Key Symptoms | Treatment |
|-----------|-------------|--------------|-----------|
| Heat cramps | Normal-mildly elevated | Muscle spasms, pain | Rest, oral fluids with electrolytes |
| Heat syncope | Normal-mildly elevated | Fainting or dizziness when standing | Lie down, cool area, fluids |
| Heat exhaustion | <104°F (40°C) | Heavy sweating, weakness, nausea, headache | Move to cool area, fluids, cooling |
| Heat stroke | ≥104°F (40°C) | Confusion, seizures, loss of consciousness | 911 - aggressive cooling IMMEDIATELY |

### Risk Factors

**Environmental:**
- High temperature and humidity
- Direct sun exposure
- No air movement/breeze
- Radiant heat from equipment or surfaces

**Individual:**
- Not yet acclimatized (especially first 1-2 weeks)
- Dehydrated
- Overweight or obese
- Heart disease, diabetes, or high blood pressure
- Medications: Diuretics, beta-blockers, antihistamines, antipsychotics

**Occupational:**
- High physical workload
- Heavy protective clothing or equipment
- No access to shade or cool areas
- No access to drinking water

### Prevention: Water, Rest, Shade

**Water:**
- Drink 8 oz (1 cup) of water every 15-20 minutes
- Do not rely on thirst as an indicator
- Avoid energy drinks or caffeine as sole fluid source
- Electrolyte replacement for extended work (>2 hours)

**Rest:**
- Scheduled rest breaks in cool or shaded areas
- More frequent breaks as temperature and workload increase
- Modified work schedules (start early, avoid midday peak)

**Shade:**
- Employer must provide shade when temperatures exceed threshold
- Temporary structures, canopies, or natural shade
- Air-conditioned break areas when available

**Acclimatization:**
- Gradually increase heat exposure over 7-14 days
- New workers: Start at 20% workload, increase 20% per day
- Returning workers (after absence): Re-acclimatize over 2-3 days

### Emergency Response

1. Call 911 immediately for suspected heat stroke
2. Move person to coolest available area
3. Remove excess clothing
4. Apply cold water to skin, especially neck, armpits, groin
5. Fan the person to promote evaporation
6. Place ice packs on neck, armpits, and groin
7. Do NOT give fluids if person is confused or unconscious`,
      keyTerms: [
        { term: 'acclimatization', definition: 'The physiological process of adapting to heat over 7-14 days, during which the body learns to sweat more efficiently and maintain better blood flow', pronunciation: 'ah-CLY-mah-tih-ZAY-shun' },
        { term: 'core body temperature', definition: 'The internal temperature of the body, normally about 98.6°F (37°C), which becomes dangerously elevated in heat stroke' },
        { term: 'heat index', definition: 'A measurement that combines air temperature and humidity to show how hot it actually feels to the body' },
        { term: 'electrolytes', definition: 'Minerals like sodium and potassium in your blood that help muscles and nerves work properly, lost through sweating' },
        { term: 'exertional heat stroke', definition: 'Heat stroke that occurs in otherwise healthy people doing intense physical work in the heat, as opposed to classic heat stroke in elderly during heat waves' },
      ],
      patientCounselingPoints: [
        'New workers are most at risk - over half of heat-related deaths happen in the first few days on the job.',
        'Humidity is just as dangerous as temperature because it prevents your sweat from evaporating.',
        'Dark-colored urine is a warning sign of dehydration. Keep drinking until your urine is pale yellow.',
        'If a coworker stops sweating, is confused, or collapses in the heat, call 911 immediately - this is heat stroke.',
      ],
    },
    3: {
      level: 3,
      summary: 'Heat illness physiology involves failure of thermoregulatory mechanisms, with exertional heat stroke representing a systemic inflammatory response triggered by core temperature elevation above 40°C, requiring understanding of WBGT-based exposure assessment, acclimatization physiology, and occupational risk stratification.',
      explanation: `## Thermoregulation Physiology

### Heat Balance Equation

The body's thermal equilibrium is expressed as:
**S = M - W ± R ± C - E**

Where:
- S = Heat storage (positive = warming)
- M = Metabolic heat production
- W = External work performed
- R = Radiant heat exchange
- C = Convective heat exchange
- E = Evaporative heat loss

When S > 0, core temperature rises progressively.

### Physiological Adaptations to Heat (Acclimatization)

**Cardiovascular:**
- Expanded plasma volume (10-15% over 7-10 days)
- Increased cardiac output and stroke volume
- Reduced resting heart rate at given workload

**Sudomotor:**
- Earlier onset of sweating
- Increased sweat rate (up to 2-3 L/hour)
- Reduced sweat sodium concentration (aldosterone-mediated)
- More uniform sweat distribution across body surface

**Renal:**
- Enhanced sodium reabsorption
- Concentrated urine to conserve water
- Increased ADH and aldosterone secretion

### Heat Illness Pathophysiology

**Heat Exhaustion:**
- Volume depletion from sweating and inadequate replacement
- Peripheral vasodilation diverts blood from core organs
- Cardiovascular strain: Competing demands for cutaneous and muscular blood flow
- Core temperature elevated but thermoregulatory mechanisms still functional

**Exertional Heat Stroke (EHS):**
- Thermoregulatory failure with core temperature ≥40°C (104°F) + CNS dysfunction
- Cellular injury: Direct thermal damage to cell membranes and proteins
- Gut barrier disruption: Endotoxin translocation from splanchnic ischemia
- Systemic inflammatory response: Cytokine cascade (IL-1, IL-6, TNF-alpha)
- Endothelial activation: Coagulopathy, DIC
- Multi-organ dysfunction: CNS, renal, hepatic, hematologic

### Environmental Heat Assessment

**Wet Bulb Globe Temperature (WBGT):**
- WBGT (outdoor) = 0.7 × Tw + 0.2 × Tg + 0.1 × Td
  - Tw = Natural wet bulb temperature (evaporative capacity)
  - Tg = Globe temperature (radiant heat)
  - Td = Dry bulb temperature (air temperature)
- Humidity (wet bulb) accounts for 70% of the index

**ACGIH TLV for Heat Stress:**

| Work Intensity | Acclimatized WBGT (°C) | Unacclimatized WBGT (°C) |
|---------------|------------------------|--------------------------|
| Light | 31.0 | 28.0 |
| Moderate | 28.0 | 25.0 |
| Heavy | 26.0 | 22.0 |
| Very Heavy | 25.0 | 20.0 |

**Work-Rest Regimens (NIOSH):**

| WBGT (°C) Acclimatized | Continuous | 75/25 Work-Rest | 50/50 Work-Rest | 25/75 Work-Rest |
|------------------------|------------|-----------------|-----------------|-----------------|
| Light work | 31.0 | 31.5 | 32.5 | 33.0 |
| Moderate work | 28.0 | 29.0 | 30.5 | 32.0 |
| Heavy work | 26.0 | 27.5 | 29.5 | 31.0 |

### Occupational High-Risk Populations

- Agricultural workers (outdoor heat + PPE)
- Construction workers (outdoor heat + physical exertion)
- Firefighters (extreme radiant heat + encapsulating PPE)
- Foundry and smelter workers (indoor radiant heat sources)
- Military personnel (physical exertion + body armor)
- Athletes (exertional heat stroke is leading cause of death in sport)

### Pharmacological Risk Factors

- **Anticholinergics**: Impair sweating
- **Diuretics**: Promote dehydration
- **Beta-blockers**: Impair cardiac response to heat
- **Stimulants (amphetamines, cocaine)**: Increase metabolic heat production
- **Antipsychotics**: Impair hypothalamic thermoregulation
- **Alcohol**: Vasodilation, dehydration, impaired judgment`,
      keyTerms: [
        { term: 'WBGT', definition: 'Wet Bulb Globe Temperature; the standard occupational heat stress index weighting humidity (70%), radiant heat (20%), and air temperature (10%)', pronunciation: 'W-B-G-T' },
        { term: 'endotoxin translocation', definition: 'The passage of bacterial lipopolysaccharide from the gut lumen into the systemic circulation due to heat-induced splanchnic ischemia, triggering systemic inflammation in heat stroke' },
        { term: 'acclimatization', definition: 'Physiological adaptation to heat occurring over 7-14 days, including expanded plasma volume, earlier sweating onset, reduced sweat sodium, and improved cardiovascular efficiency' },
        { term: 'metabolic heat production', definition: 'Internal heat generated by cellular metabolism, which increases 5-15 fold during heavy physical work and must be dissipated to maintain thermal equilibrium' },
        { term: 'thermoregulatory failure', definition: 'The pathophysiological hallmark of heat stroke in which the body\'s cooling mechanisms are overwhelmed or cease to function, leading to uncontrolled rise in core temperature' },
      ],
    },
    4: {
      level: 4,
      summary: 'Clinical management of heat stroke requires understanding of cytokine-mediated multi-organ injury, evidence-based cooling protocols, post-recovery sequelae assessment, and the design of comprehensive workplace heat illness prevention programs integrating physiological monitoring, acclimatization protocols, and regulatory compliance.',
      explanation: `## Clinical Management of Heat Stroke

### Diagnostic Criteria

**Exertional Heat Stroke (EHS):**
- Core temperature ≥40°C (104°F) measured rectally
- Central nervous system dysfunction (altered mental status, seizures, coma)
- Occurs during or shortly after physical exertion in heat
- NOTE: Sweating may still be present in EHS (unlike classic heat stroke)

**Critical Caveat**: Core temperature may have already begun to decrease by the time of measurement if cooling has started. A normal temperature at presentation does NOT rule out EHS if CNS dysfunction was witnessed during or after heat exposure.

### Cooling Protocols

**Cold Water Immersion (CWI):**
- Gold standard for EHS cooling
- Ice water bath (1-5°C / 34-41°F)
- Cooling rate: 0.15-0.35°C per minute
- Target: Core temperature <39°C (102.2°F)
- "Cool first, transport second" principle
- Monitor core temperature continuously (rectal probe)
- Shivering does not significantly impair cooling rate despite historical concerns

**Alternative Cooling Methods (when CWI unavailable):**
- Tarp-assisted cooling: Ice water poured over patient on tarp in field settings
- Rotating ice towels: Applied to trunk and proximal extremities, rotated every 2 minutes
- Evaporative cooling: Water mist + high-velocity fans
- Cold IV fluid bolus: 1-2 L of 4°C normal saline (adjunctive, not primary)
- Ice packs to axillae, groin, and neck (adjunctive)

**Cooling Methods to AVOID:**
- Antipyretics (NSAIDs, acetaminophen): Thermoregulatory set-point is not elevated; they do not help and may worsen hepatic injury
- Alcohol sponge baths: Risk of inhalational toxicity and cutaneous vasoconstriction
- Dantrolene: No evidence of benefit in EHS (unlike malignant hyperthermia)

### Multi-Organ Injury Assessment

**CNS:**
- GCS assessment serially
- Cerebellar dysfunction (ataxia) may persist weeks
- MRI for persistent deficits
- Long-term neurocognitive sequelae in ~30% of survivors

**Hepatic:**
- Transaminase elevation peaks at 48-72 hours post-insult
- AST/ALT may exceed 10,000 U/L in severe cases
- Acute liver failure with coagulopathy possible
- N-acetylcysteine may be protective (evidence emerging)

**Renal:**
- Rhabdomyolysis-induced AKI: CK >5,000 U/L threshold
- Aggressive IV hydration to maintain UOP 200-300 mL/hour
- Alkalinize urine if CK markedly elevated
- Monitor for hyperkalemia, hyperphosphatemia

**Hematologic:**
- DIC: Monitor PT, PTT, fibrinogen, D-dimer, platelets
- DIC develops in 20-30% of severe EHS

### Workplace Heat Illness Prevention Program Design

**Comprehensive Program Elements:**

1. **Written heat illness prevention plan**
2. **Hazard assessment**: WBGT monitoring, workload categorization
3. **Engineering controls**: Shade structures, ventilation, reflective barriers
4. **Work practices**:
   - Acclimatization protocols (new and returning workers)
   - Work-rest schedules based on WBGT and metabolic rate
   - Buddy system with trained observers
5. **Hydration program**:
   - Water stations within 200 feet of work areas
   - Minimum 1 quart per worker per hour
   - Electrolyte replacement for extended exertion
6. **PPE considerations**:
   - Cooling vests (phase-change or evaporative)
   - Modified PPE schedules when feasible
   - Adjusted work-rest cycles for impermeable clothing
7. **Training**: Workers, supervisors, first-aid responders
8. **Emergency response plan**: On-site cooling supplies, EMS access
9. **Physiological monitoring**: Heart rate, core temperature (ingestible sensors for high-risk operations)

### Return to Duty After Heat Stroke

- Minimum 7 days before heat exposure
- Heat tolerance test (HTT): 120-minute standardized treadmill walk in 40°C, 40% RH chamber
- Serial assessment of thermoregulatory and cardiovascular responses
- Some individuals develop permanent heat intolerance
- Gradual re-acclimatization protocol over 2+ weeks`,
      keyTerms: [
        { term: 'cold water immersion', definition: 'The gold standard cooling method for exertional heat stroke using an ice water bath (1-5°C) achieving cooling rates of 0.15-0.35°C per minute, based on the "cool first, transport second" principle' },
        { term: 'heat tolerance test', definition: 'A standardized laboratory protocol (typically 120-min treadmill walk at 40°C, 40% RH) used to assess thermoregulatory capacity before return to heat exposure after heat stroke' },
        { term: 'splanchnic ischemia', definition: 'Reduced blood flow to the gut during heat stress as blood is redirected to the skin for cooling, leading to intestinal barrier disruption and endotoxin translocation' },
        { term: 'ingestible temperature sensor', definition: 'A telemetric capsule swallowed by a worker that transmits core body temperature wirelessly, enabling real-time physiological monitoring during heat exposure' },
        { term: 'ACGIH TLV for heat stress', definition: 'Action limit and threshold limit values published by the American Conference of Governmental Industrial Hygienists based on WBGT and metabolic work rate for acclimatized and unacclimatized workers' },
        { term: 'phase-change cooling vest', definition: 'A personal cooling garment using materials that absorb heat during melting (typically 15-28°C), providing microclimate cooling for workers in hot environments' },
      ],
      clinicalNotes: `Critical management points:

1. **"Cool first, transport second"**: Delay in cooling is the primary determinant of morbidity and mortality in EHS. Initiate cooling at the scene before transport. Mortality approaches zero when cooling begins within 30 minutes; exceeds 50% when delayed beyond 2 hours.

2. **Rectal temperature is mandatory**: Oral, axillary, tympanic, and temporal artery thermometry are unreliable in heat stroke. Rectal temperature is the only acceptable clinical measurement of core temperature in the field. If rectal thermometry is unavailable, treat based on clinical suspicion.

3. **Do not stop cooling at 38.9°C (102°F)**: The "overshoot" phenomenon (afterdrop) is minimal with CWI. Stop cooling at 38.9°C to provide a margin, but be prepared to resume if temperature rises again.

4. **Transaminase monitoring**: Check AST/ALT at 24, 48, and 72 hours post-event. Peak values may not occur until 72 hours. Massive elevations (>10,000 U/L) warrant hepatology consultation and consideration for transplant evaluation.

5. **Rhabdomyolysis management**: CK levels typically peak at 24-72 hours. Aggressive hydration targeting urine output of 200-300 mL/hour. Consider bicarbonate drip for urine alkalinization if CK >10,000 U/L. Monitor for compartment syndrome in severe cases.`,
    },
    5: {
      level: 5,
      summary: 'Emerging heat illness science integrates genomic susceptibility markers, advanced real-time physiological monitoring, climate change projections for occupational heat burden, and evolving regulatory frameworks to address the growing global public health crisis of occupational heat-related mortality and morbidity.',
      explanation: `## Frontiers in Heat Illness Science

### Molecular Mechanisms of Heat Injury

**Heat Shock Response:**
- Heat shock proteins (HSP70, HSP90) are the primary cytoprotective response
- HSP70 induction: Chaperone function prevents protein denaturation
- Acclimatization increases constitutive HSP expression
- HSP72 polymorphisms may determine individual heat tolerance
- Failure of the heat shock response precedes cellular necrosis

**Inflammatory Cascade in Heat Stroke:**
- Dual-hit model: Direct thermal injury + ischemia-reperfusion injury
- Endotoxin translocation activates TLR4 on monocytes and Kupffer cells
- Cytokine release: IL-1β, IL-6, TNF-α, HMGB1
- Complement activation: C3a, C5a amplify inflammation
- Endothelial activation: von Willebrand factor release, tissue factor expression
- Cytokine storm parallels sepsis pathophysiology

**Coagulopathy:**
- Tissue factor pathway initiates DIC
- Protein C and antithrombin III consumption
- Fibrinolytic shutdown (PAI-1 elevation)
- Microthrombi formation in cerebral, hepatic, and renal vasculature
- May respond to heparin and antithrombin III replacement

### Genomics of Heat Susceptibility

**Candidate Genes:**
- HSP70 promoter polymorphisms (HSPA1A, HSPA1B)
- CPT2 (carnitine palmitoyltransferase II) mutations: Mitochondrial fatty acid oxidation defects unmasked by heat stress
- RYR1 (ryanodine receptor): Malignant hyperthermia susceptibility; may overlap with EHS vulnerability
- TNF-α promoter variants affecting inflammatory response magnitude
- CYP enzymes affecting drug metabolism and heat-drug interactions

**Military and Athletic Screening:**
- CPT2 and RYR1 screening debated for high-risk occupations
- Pharmacogenomics may inform medication guidance in heat-exposed workers
- GWAS studies underway for heat stroke susceptibility loci

### Advanced Physiological Monitoring

**Ingestible Core Temperature Sensors:**
- Telemetric capsule (e.g., CorTemp) with wireless readout
- Transit time 24-36 hours; must be swallowed 6-8 hours before monitoring
- Accuracy ±0.1°C compared to rectal temperature
- Used by military, professional sports, industrial operations
- Limitations: Cost, GI transit variability, interference from cold fluid ingestion

**Wearable Physiological Monitoring:**
- Heart rate variability (HRV) analysis for thermal strain detection
- Physiological Strain Index (PSI): Composite of heart rate and core temperature
- Dermal sweat rate sensors (microfluidic patches)
- Continuous blood pressure and cardiac output monitoring
- AI/ML algorithms for real-time strain prediction from multi-parameter data

### Climate Change and Occupational Heat Burden

**Global Impact Projections:**
- ILO estimates 2.2% of total working hours lost globally by 2030 due to heat
- Disproportionate impact on tropical and subtropical regions
- Agricultural and construction sectors most affected
- Economic losses projected at $2.4 trillion globally by 2030

**Heat Wave Intensification:**
- Compound extreme heat events increasing in frequency and duration
- Urban heat island effect amplifies temperatures 1-3°C in cities
- Night-time temperatures rising faster than daytime (impairs recovery)
- Wet bulb temperature approaching human physiological limits in some regions

**Adaptation Framework:**
- Revised TLV/REL for emerging climate conditions
- Indoor heat exposure standards gaining attention (warehouses, kitchens, laundries)
- Predictive heat health warning systems integrated with employer notification
- Building codes incorporating occupational heat load calculations
- Green infrastructure and cool roofing for outdoor work areas

### Regulatory Landscape

**Federal OSHA Heat Standard (Proposed):**
- ANPR published October 2021; NPRM in development
- Would establish enforceable heat-specific requirements for first time
- Expected elements: Trigger temperatures, hydration, rest, acclimatization, monitoring
- Currently enforced through Section 5(a)(1) General Duty Clause

**State Heat Standards:**
- California (Cal/OSHA): Outdoor heat standard since 2005; indoor standard 2024
  - Triggers at 80°F (outdoor) and 82°F (indoor)
  - Mandatory shade, water, rest, acclimatization plan
  - High-heat procedures at 95°F
- Washington: Outdoor heat standard since 2008
- Oregon: Emergency heat rules (2021), permanent rule adopted 2022
- Colorado, Maryland: Standards in development

**International Standards:**
- ISO 7243: Hot environments - WBGT screening
- ISO 7933: Predicted Heat Strain (PHS) model
- Qatar 2022 FIFA World Cup heat management protocols as case study`,
      keyTerms: [
        { term: 'heat shock protein 70 (HSP70)', definition: 'A molecular chaperone protein induced by thermal stress that prevents protein denaturation and aggregation, representing the primary cellular defense against heat injury' },
        { term: 'dual-hit model', definition: 'The pathophysiological concept that heat stroke injury results from both direct thermal tissue damage and secondary ischemia-reperfusion injury with endotoxin-driven systemic inflammation' },
        { term: 'Physiological Strain Index (PSI)', definition: 'A composite index (0-10 scale) combining normalized heart rate and core temperature responses used for real-time assessment of physiological heat strain during occupational exposure' },
        { term: 'wet bulb temperature', definition: 'The lowest temperature achievable by evaporative cooling; when wet bulb temperature approaches 35°C, human thermoregulation through sweating becomes physically impossible regardless of fitness or acclimatization' },
        { term: 'CPT2 mutation', definition: 'A carnitine palmitoyltransferase II deficiency affecting mitochondrial fatty acid oxidation that may predispose to exertional heat stroke and rhabdomyolysis during heat stress' },
        { term: 'General Duty Clause', definition: 'Section 5(a)(1) of the OSH Act requiring employers to provide a workplace free from recognized hazards; the primary federal enforcement mechanism for heat hazards pending a specific heat standard' },
      ],
      clinicalNotes: `Expert-level considerations:

1. **Emerging biomarkers for prognosis**: Serum HMGB1 (high mobility group box 1), procalcitonin, and soluble thrombomodulin levels within 6 hours of EHS onset correlate with DIC development and multi-organ failure. IL-6 >1000 pg/mL at presentation is associated with poor outcomes.

2. **Heat stroke mimics to exclude**: Serotonin syndrome (recent SSRI/SNRI changes), neuroleptic malignant syndrome (recent antipsychotic changes), malignant hyperthermia (anesthetic exposure), thyroid storm, sympathomimetic toxicity (amphetamines, cocaine). The clinical presentation can be indistinguishable; history is key.

3. **RYR1 and EHS overlap**: Case series suggest that up to 20% of recurrent EHS patients have RYR1 variants. Consider caffeine-halothane contracture testing or genetic screening for patients with recurrent heat intolerance or family history of malignant hyperthermia.

4. **Climate-adjusted prevention**: Current ACGIH TLV tables were derived from occupational data in historical climate conditions. For regions experiencing unprecedented heat events, clinicians and safety professionals should advocate for more conservative work-rest schedules and lower trigger temperatures than those published in existing guidance.

5. **Medicolegal documentation**: Heat-related deaths are OSHA-reportable events. Document environmental conditions (WBGT or heat index), timeline of symptom onset, employer-provided preventive measures (water, shade, acclimatization), and core temperature measurements for thorough incident investigation.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'osha-heat-illness',
      type: 'website',
      title: 'Heat Illness Prevention Campaign',
      authors: ['Occupational Safety and Health Administration'],
      source: 'OSHA',
      url: 'https://www.osha.gov/heat-exposure',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cdc-niosh-heat-stress',
      type: 'website',
      title: 'Heat Stress - Occupational Heat Exposure',
      authors: ['National Institute for Occupational Safety and Health'],
      source: 'CDC/NIOSH',
      url: 'https://www.cdc.gov/niosh/topics/heatstress/',
      accessedDate: '2025-01-15',
    },
    {
      id: 'who-heat-health',
      type: 'guideline',
      title: 'Heat and Health in the WHO European Region',
      authors: ['World Health Organization'],
      source: 'WHO',
      url: 'https://www.who.int/news-room/fact-sheets/detail/climate-change-heat-and-health',
      accessedDate: '2025-01-15',
    },
  ],

  crossReferences: [
    { targetId: 'topic-agricultural-worker-health', targetType: 'topic', relationship: 'related', label: 'Agricultural Worker Health' },
    { targetId: 'topic-construction-worker-safety', targetType: 'topic', relationship: 'related', label: 'Construction Worker Safety' },
  ],

  tags: {
    systems: ['cardiovascular', 'neurological', 'renal', 'hepatic'],
    topics: ['occupational-medicine', 'emergency-medicine', 'environmental-health', 'preventive-medicine'],
    keywords: ['heat stroke', 'heat exhaustion', 'hyperthermia', 'WBGT', 'acclimatization', 'thermoregulation'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
