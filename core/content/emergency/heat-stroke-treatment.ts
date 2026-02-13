/**
 * Heat Stroke Treatment
 *
 * Comprehensive guide covering the spectrum of heat-related illness from
 * heat cramps through exertional and classic heat stroke, including
 * recognition, cooling methods, and prevention strategies.
 */

import { EducationalContent } from '../types';

export const heatStrokeTreatmentContent: EducationalContent = {
  id: 'topic-heat-stroke-treatment',
  type: 'topic',
  name: 'Heat Stroke Treatment',
  nameEs: 'Tratamiento del Golpe de Calor',
  alternateNames: ['Heat Illness', 'Hyperthermia Management', 'Heat Emergency'],

  levels: {
    1: {
      level: 1,
      summary: 'Heat stroke happens when your body overheats and can no longer cool itself down. It is a medical emergency that can cause brain damage or death if not treated quickly by cooling the person down and calling 911.',
      explanation: `Your body is like a car engine — it needs to stay at the right temperature to work properly. Normally, your body cools itself by sweating. But when it gets extremely hot or you exercise too hard in the heat, your body's cooling system can fail. That is heat stroke.

**Stages of heat illness (from mild to severe):**

1. **Heat cramps** — Painful muscle cramps during exercise in the heat. This is the mildest form.
   - What to do: Stop exercising, rest in the shade, drink water with electrolytes, stretch gently.

2. **Heat exhaustion** — Your body is struggling to cool down.
   - Signs: Heavy sweating, cold and clammy skin, fast weak pulse, nausea, dizziness, headache, weakness
   - What to do: Move to a cool place, lie down with legs raised, sip cool water, apply cool wet cloths. If symptoms last more than an hour, get medical help.

3. **Heat stroke** — Your body's cooling system has FAILED. This is a medical emergency.
   - Signs: Body temperature above 103 degrees F, hot red dry skin (no sweating), fast strong pulse, headache, confusion, loss of consciousness
   - What to do: Call 911 IMMEDIATELY. Move the person to the coolest place possible. Cool them down fast using ANY method: cold water, ice, wet towels, fanning. Do NOT give them anything to drink if they are confused or unconscious.

**How to cool someone with heat stroke:**
- The best method: Put them in a tub of ice water if possible
- If no tub: Cover them with cold wet sheets or towels, especially on the neck, armpits, and groin
- Fan them while applying cold water
- Put ice packs on the neck, armpits, and groin (where big blood vessels are close to the skin)
- Do not stop cooling until their temperature drops below 102 degrees F or help arrives

**Who is most at risk:**
- Older adults (65+)
- Babies and young children
- People who work or exercise outdoors
- People on certain medications (blood pressure medicines, diuretics, antidepressants)
- People without air conditioning during heat waves

**Prevention:**
- Drink plenty of water before, during, and after being in the heat
- Wear light, loose-fitting clothing and a hat
- Take breaks in the shade or air conditioning
- Never leave children or pets in a parked car — temperatures can reach 130 degrees F in minutes
- Check on elderly neighbors during heat waves`,
      keyTerms: [
        { term: 'heat stroke', definition: 'A life-threatening condition where the body overheats to dangerous levels (above 103 degrees F) and can no longer cool itself down' },
        { term: 'heat exhaustion', definition: 'A less severe heat illness where the body is struggling to cool down, causing heavy sweating, dizziness, and weakness' },
        { term: 'dehydration', definition: 'When your body loses more water than it takes in, making it harder for the body to cool itself and function normally' },
        { term: 'electrolytes', definition: 'Minerals in your body (like sodium and potassium) that help muscles work and keep the right amount of water in your cells' },
        { term: 'core temperature', definition: 'The temperature inside your body, which normally stays around 98.6 degrees F' },
        { term: 'heat cramps', definition: 'Painful muscle spasms that happen during or after exercise in the heat, caused by fluid and electrolyte loss' },
      ],
      analogies: [
        'Your body is like a car engine — it needs to stay at the right temperature to work, and when the cooling system fails, the engine overheats.',
        'Sweating is like the radiator in a car — it releases heat to keep things cool, but if there is not enough fluid, the system breaks down.',
        'Putting ice on the neck, armpits, and groin is like pouring water on the hottest parts of an engine first.',
      ],
      patientCounselingPoints: [
        'Heat stroke is a TRUE EMERGENCY — call 911 immediately. Do not wait to see if the person improves.',
        'Cool the person as fast as possible using any available method — speed of cooling is the most important factor.',
        'Drink water regularly in the heat, even before you feel thirsty — thirst means you are already dehydrated.',
        'Never leave children or pets in a parked car, even with the windows cracked.',
        'Check on elderly friends and neighbors during heat waves — they are at the highest risk.',
        'If you feel dizzy, nauseous, or stop sweating during exercise in the heat, stop immediately and get to a cool place.',
      ],
    },
    2: {
      level: 2,
      summary: 'Heat-related illness exists on a continuum from heat cramps through heat exhaustion to heat stroke. Heat stroke is classified as classic (non-exertional) or exertional, both requiring immediate aggressive cooling. Cold water immersion is the gold standard treatment, and the speed of cooling is the primary determinant of outcome.',
      explanation: `## Heat Stroke Treatment: Comprehensive Overview

### The Spectrum of Heat-Related Illness

**Heat Cramps:**
- Painful, involuntary muscle spasms during or after exercise in heat
- Caused by sodium depletion and dehydration
- Treatment: Rest, oral rehydration with electrolyte solution, gentle stretching
- Generally benign but may precede more serious heat illness

**Heat Syncope:**
- Fainting or dizziness during prolonged standing or exertion in heat
- Caused by peripheral vasodilation and orthostatic pooling of blood
- Treatment: Supine position, oral fluids, move to cool environment
- Rule out other causes of syncope (cardiac)

**Heat Exhaustion:**
- Core temperature may be elevated (up to 40 degrees C / 104 degrees F) but CNS function is intact
- Signs: Profuse sweating, tachycardia, hypotension, nausea/vomiting, headache, weakness, dizziness
- Skin may be pale, cool, and clammy (sweating is still functional)
- Treatment: Remove from heat, rest in cool environment, oral or IV hydration, active cooling
- Can progress to heat stroke if untreated

**Heat Stroke (Medical Emergency):**
Core temperature greater than 40 degrees C (104 degrees F) WITH central nervous system dysfunction (confusion, altered consciousness, seizures, coma).

Two types:
1. **Classic (non-exertional)**: Occurs during heat waves in vulnerable populations (elderly, chronically ill, medications that impair thermoregulation). Develops over days. Skin is often hot and DRY.
2. **Exertional**: Occurs during vigorous physical activity in heat. Affects athletes, military personnel, outdoor workers. Develops rapidly (hours). Skin may still be sweaty.

### Cooling Methods (Ranked by Effectiveness)

1. **Cold water immersion (CWI)**: Gold standard. Immerse in ice water (1-3 degrees C). Cooling rate: approximately 0.20 degrees C/min. Reduces mortality to less than 5% when initiated promptly.
2. **Tarp-assisted cooling**: Patient lies on tarp, ice water poured over body — field-expedient CWI.
3. **Evaporative cooling**: Spray skin with water while fanning with warm air. Cooling rate: approximately 0.05 degrees C/min. Less effective than CWI.
4. **Ice packs to vascular areas**: Neck, axillae, groin. Cooling rate: approximately 0.03 degrees C/min. Adjunctive only.
5. **Cold IV fluids**: 4 degrees C normal saline bolus. Limited cooling capacity (approximately 0.5 degrees C per liter). Use for resuscitation primarily.

**Key Principle: "Cool first, transport second."**
Begin aggressive cooling on scene. Do NOT delay cooling to transport to a hospital. Field cooling with CWI is superior to any cooling method available during ambulance transport.

### Assessment and Monitoring

- **Rectal temperature**: The only reliable method for core temperature measurement. Oral, axillary, and tympanic thermometers are inaccurate in the setting of heat illness.
- Target cooling to below 39 degrees C (102.2 degrees F), then stop active cooling to prevent overshoot hypothermia.
- Monitor mental status continuously as a marker of response.
- Check blood glucose — hypoglycemia may contribute to altered mental status.

### Complications of Heat Stroke
- Rhabdomyolysis (muscle breakdown)
- Acute kidney injury (from dehydration and myoglobin)
- Disseminated intravascular coagulation (DIC)
- Hepatic injury (liver damage, may be delayed 2-3 days)
- Acute respiratory distress syndrome (ARDS)
- Cerebral edema and permanent neurological damage
- Multi-organ failure and death

### Prevention

**Individual:**
- Acclimatization: Gradual exposure over 10-14 days increases heat tolerance
- Hydration: Pre-hydrate, drink during activity, replace electrolytes
- Appropriate clothing: Light, loose, breathable fabrics
- Recognize early warning signs and stop activity immediately

**Organizational (Sports, Military, Workplaces):**
- Wet Bulb Globe Temperature (WBGT) monitoring for activity modification
- Mandatory work-rest cycles based on heat index
- On-site cold water immersion tubs at athletic events
- Emergency action plans for heat illness
- Education and training for coaches, supervisors, and athletes`,
      keyTerms: [
        { term: 'cold water immersion', definition: 'The gold standard cooling method for heat stroke, involving submersion in ice water (1-3 degrees C), achieving cooling rates of approximately 0.20 degrees C per minute' },
        { term: 'exertional heat stroke', definition: 'Heat stroke occurring during vigorous physical activity, characterized by core temperature above 40 degrees C with CNS dysfunction, primarily affecting athletes and laborers' },
        { term: 'classic heat stroke', definition: 'Non-exertional heat stroke developing over days during heat waves, primarily affecting elderly and vulnerable populations with impaired thermoregulation' },
        { term: 'rhabdomyolysis', definition: 'The breakdown of skeletal muscle releasing cellular contents (myoglobin, creatine kinase, potassium) into the bloodstream, a common complication of heat stroke that can cause kidney failure' },
        { term: 'acclimatization', definition: 'The physiological adaptation to heat over 10-14 days of graduated exposure, resulting in earlier sweating, more dilute sweat, and increased plasma volume' },
        { term: 'Wet Bulb Globe Temperature', definition: 'A composite environmental measurement accounting for temperature, humidity, wind speed, and solar radiation; used to set activity modification guidelines for heat illness prevention' },
      ],
      patientCounselingPoints: [
        'If someone is confused, disoriented, or unconscious in the heat, assume heat stroke and call 911 immediately.',
        'Cool first, transport second — begin cold water immersion or aggressive cooling before waiting for an ambulance.',
        'Rectal temperature is the only reliable measurement — oral and forehead thermometers are unreliable for heat illness.',
        'Acclimatize gradually when starting a new exercise program or job in the heat — take 10-14 days of increasing exposure.',
        'Dark-colored urine means you are dehydrated — drink enough that your urine stays light yellow.',
      ],
    },
    3: {
      level: 3,
      summary: 'Heat stroke pathophysiology involves failure of thermoregulatory mechanisms, leading to direct cytotoxicity, systemic inflammatory response, endothelial injury, and coagulopathy. The critical determinant of outcome is the duration and magnitude of hyperthermia, making speed of cooling the most important modifiable factor.',
      explanation: `## Heat Stroke: Intermediate Analysis

### Thermoregulation Physiology

Normal thermoregulation integrates:
- **Hypothalamic set-point**: The preoptic anterior hypothalamus acts as a thermostat, comparing core temperature to a set-point (~37 degrees C)
- **Heat dissipation mechanisms**: Cutaneous vasodilation (radiation/convection), sweating (evaporation), and behavioral modification (seeking shade)
- **Heat production**: Basal metabolic rate, muscular activity, and dietary thermogenesis

**Evaporative cooling capacity:**
- Sweat rates in acclimatized individuals: Up to 1.5 L/hour
- Evaporation is the primary heat dissipation mechanism above 35 degrees C ambient temperature
- When ambient humidity exceeds 75%, evaporative cooling efficiency drops dramatically
- This is why WBGT incorporates humidity as the dominant factor (wet bulb temperature weighted 0.7)

### Pathophysiology of Heat Stroke

Heat stroke occurs when heat gain exceeds heat dissipation capacity:

**Phase 1 — Direct Cytotoxicity (minutes to hours):**
- Core temperatures above 40 degrees C cause protein denaturation and membrane lipid destabilization
- Mitochondrial dysfunction reduces ATP production
- Endoplasmic reticulum stress triggers the unfolded protein response
- Cellular necrosis releases DAMPs (damage-associated molecular patterns)

**Phase 2 — Systemic Inflammatory Response (hours):**
- DAMP release activates TLR4 on macrophages and dendritic cells
- Cytokine storm: TNF-alpha, IL-1beta, IL-6, HMGB1
- Endothelial activation and glycocalyx disruption
- Increased vascular permeability → third-spacing of fluids
- Parallels the pathophysiology of sepsis ("thermal sepsis" concept)

**Phase 3 — Endothelial Injury and Coagulopathy (hours to days):**
- Endothelial damage exposes tissue factor → DIC activation
- Consumptive coagulopathy → bleeding and microvascular thrombosis
- DIC incidence in heat stroke: 45-80%
- Contributes to multi-organ failure

**Phase 4 — Multi-Organ Dysfunction (days):**
- CNS: Cerebral edema, Purkinje cell death (cerebellum is particularly vulnerable), may be permanent
- Hepatic: Centrilobular necrosis; AST/ALT may peak at 3-4 days; acute liver failure in severe cases
- Renal: ATN from combined hypovolemia, rhabdomyolysis (myoglobin casts), and DIC
- Cardiac: Myocardial injury from direct heat damage and hemodynamic stress
- Pulmonary: ARDS from capillary leak and DIC

### Evidence for Cold Water Immersion

**Key Studies:**
- Casa et al. (2007): Analysis of 274 exertional heat stroke cases treated with CWI showed 0% mortality when cooling was initiated within 30 minutes and core temperature was reduced below 40 degrees C within 30 minutes.
- Demartini et al. (2015): Pooled data confirmed CWI survival rate >95% when cooling rate exceeded 0.15 degrees C/min.
- Armstrong et al. (1996): Falmouth Road Race data showing that runners with exertional heat stroke cooled via CWI had no fatalities despite core temperatures exceeding 42 degrees C.

**Why CWI is superior:**
- Conductive heat transfer in water is 25x more efficient than in air
- CWI cools the entire body surface simultaneously
- The "cold shock" response (shivering, peripheral vasoconstriction) does not significantly impede core cooling when water temperature is 1-15 degrees C

### Pharmacological Considerations

**Dantrolene:**
- Peripherally-acting skeletal muscle relaxant that inhibits calcium release from sarcoplasmic reticulum
- First-line for malignant hyperthermia (a distinct entity triggered by anesthetic agents)
- NOT proven effective for heat stroke; a small RCT (Bouchama, 2014) showed no benefit
- Should not delay physical cooling measures

**Antipyretics (acetaminophen, NSAIDs):**
- Ineffective in heat stroke. Antipyretics reset the hypothalamic set-point, which is not elevated in heat stroke — the hypothalamus is overwhelmed, not reset.
- NSAIDs may worsen renal injury

**Benzodiazepines:**
- Indicated for shivering during cooling (shivering generates heat and increases oxygen consumption)
- Indicated for seizures (occur in 5-10% of heat stroke)

### Return to Activity After Heat Stroke

Exertional heat stroke causes transient thermoregulatory dysfunction:
- No exercise for at least 7 days after discharge
- Gradual return to activity over 2-4 weeks
- Heat tolerance testing at 4-6 weeks (supervised exercise in controlled hot environment)
- Some individuals have persistent heat intolerance and may not safely return to high-heat activities`,
      keyTerms: [
        { term: 'thermal sepsis', definition: 'The conceptual parallel between heat stroke pathophysiology and sepsis, involving DAMP release, TLR4 activation, cytokine storm, endothelial injury, and progression to multi-organ dysfunction' },
        { term: 'disseminated intravascular coagulation', definition: 'A life-threatening complication of heat stroke in which widespread endothelial damage triggers simultaneous coagulation and fibrinolysis, causing both microvascular thrombosis and consumptive bleeding' },
        { term: 'Purkinje cell', definition: 'Large neurons in the cerebellar cortex that are particularly vulnerable to heat-induced injury, explaining the cerebellar ataxia and dysarthria seen in some heat stroke survivors' },
        { term: 'preoptic anterior hypothalamus', definition: 'The brain region functioning as the body\'s thermostat, integrating peripheral temperature inputs and coordinating heat dissipation responses; overwhelmed (not reset) during heat stroke' },
        { term: 'heat tolerance testing', definition: 'A supervised exercise protocol conducted in a controlled hot environment at 4-6 weeks after heat stroke to assess whether thermoregulatory function has recovered before clearing return to high-heat activities' },
        { term: 'conductive heat transfer', definition: 'The direct transfer of heat between objects in physical contact; water conducts heat 25 times more efficiently than air, explaining the superiority of cold water immersion over air-based cooling methods' },
      ],
    },
    4: {
      level: 4,
      summary: 'Graduate-level heat stroke management encompasses the molecular mechanisms of heat-induced cellular injury, evidence-based cooling protocols, ICU management of multi-organ dysfunction, and the translational science linking heat shock protein responses, intestinal barrier failure, and endotoxemia to the systemic inflammatory cascade of severe heat stroke.',
      explanation: `## Heat Stroke: Graduate-Level Detail

### Molecular Mechanisms of Heat Injury

**Heat Shock Protein (HSP) Response:**
- HSPs (especially HSP70 and HSP90) are molecular chaperones induced by thermal stress
- They refold denatured proteins, prevent aggregation, and target irreversibly damaged proteins for proteasomal degradation
- HSP70 induction is a key cytoprotective response; acclimatization increases constitutive HSP70 expression
- When heat stress overwhelms the HSP response, protein aggregation and cellular necrosis occur
- Extracellular HSP70 acts as a DAMP, activating TLR2/TLR4 on immune cells

**Gut Barrier Failure ("Gut Hypothesis"):**
A pivotal mechanism in heat stroke progression:
1. Splanchnic vasoconstriction (blood redirected to skin for cooling) causes intestinal ischemia
2. Tight junction proteins (occludin, claudins, ZO-1) are disrupted by heat and ischemia
3. Intestinal permeability increases ("leaky gut"), allowing bacterial translocation
4. Endotoxin (lipopolysaccharide, LPS) enters the portal circulation
5. Hepatic Kupffer cells are overwhelmed, and LPS reaches systemic circulation
6. LPS activates TLR4, amplifying the inflammatory response → "two-hit model" (thermal injury + endotoxemia)

This has been validated in animal models and supported by human data showing elevated LPS and LPS-binding protein levels in heat stroke patients.

**Coagulopathy Mechanism:**
- Heat directly activates tissue factor on endothelial cells and monocytes
- Thrombin generation leads to widespread microvascular thrombosis
- Antithrombin III levels decrease (consumption + hepatic dysfunction)
- Protein C pathway is impaired
- Fibrinolysis is activated (elevated D-dimer, FDPs)
- Net result: DIC with both thrombotic and hemorrhagic manifestations

### ICU Management of Severe Heat Stroke

**Cooling Continuation:**
- If CWI was not initiated pre-hospital, begin immediately in the ED/ICU
- Intravascular cooling catheters (Thermogard, CoolGard): Precise temperature control; cooling rate approximately 4.5 degrees C/hour. Used when CWI is not feasible.
- Peritoneal lavage with cold saline: For refractory hyperthermia
- Extracorporeal cooling via CRRT or ECMO circuit: Last resort for refractory cases

**Hemodynamic Management:**
- Aggressive fluid resuscitation: 1-2 L isotonic crystalloid bolus, then titrate to MAP ≥65 mmHg and urine output ≥0.5 mL/kg/hr
- Vasopressors: Norepinephrine first-line for persistent hypotension despite fluid resuscitation
- Avoid alpha-1 agonists at high doses (may impair cutaneous vasodilation and heat dissipation)
- TEE or POCUS for cardiac function assessment

**Rhabdomyolysis Management:**
- CK levels may exceed 100,000 U/L in exertional heat stroke
- Aggressive IV hydration: Target urine output 200-300 mL/hr
- Sodium bicarbonate: Alkalinize urine (pH >6.5) to reduce myoglobin precipitation in renal tubules
- Monitor potassium closely (released from damaged muscle)
- CRRT for refractory hyperkalemia, acidosis, or fluid overload

**Hepatic Injury:**
- AST/ALT may peak at 3-4 days post-injury
- Can progress to acute liver failure requiring transplant evaluation
- King's College Criteria modified for heat stroke hepatic failure
- N-acetylcysteine (NAC) may provide hepatoprotection (extrapolated from acetaminophen overdose data; evidence is limited)

**DIC Management:**
- FFP and cryoprecipitate for active bleeding with fibrinogen <150 mg/dL
- Platelet transfusion for counts <50,000 with active bleeding
- Antithrombin III concentrate: Some evidence of benefit in heat stroke-related DIC (case series)
- Recombinant thrombomodulin (available in Japan): Showed mortality benefit in heat stroke DIC in retrospective studies

### Prognostic Indicators

**Associated with poor outcome:**
- Duration of hyperthermia >60 minutes before cooling
- Core temperature >42 degrees C at presentation
- GCS ≤8 at presentation
- DIC at presentation
- Lactic acidosis >4 mmol/L
- AST/ALT >1000 U/L within 24 hours
- Acute kidney injury requiring renal replacement therapy
- Apache II score >20

**Neurological Outcomes:**
- Cerebellar syndrome (ataxia, dysarthria, dysmetria) is the most common permanent deficit
- Cognitive dysfunction may be subtle and persist for months
- MRI findings: Cerebellar atrophy, hippocampal injury, white matter lesions
- Neuropsychological testing recommended at 3-6 months follow-up`,
      keyTerms: [
        { term: 'heat shock proteins', definition: 'Molecular chaperones (especially HSP70 and HSP90) induced by thermal stress that refold denatured proteins and prevent aggregation; a key cytoprotective mechanism that is overwhelmed during heat stroke' },
        { term: 'gut hypothesis', definition: 'The theory that splanchnic ischemia during heat stress causes intestinal barrier failure, bacterial translocation, and endotoxemia, creating a "two-hit" model (thermal injury plus endotoxemia) that drives the systemic inflammatory response of heat stroke' },
        { term: 'intravascular cooling catheter', definition: 'A percutaneously placed central venous catheter with a closed-loop saline circulation system that enables precise, controlled core temperature management in the ICU setting' },
        { term: 'antithrombin III', definition: 'A serine protease inhibitor that is the primary physiological anticoagulant; consumed during heat stroke-related DIC, and its supplementation has shown potential benefit in case series' },
        { term: 'recombinant thrombomodulin', definition: 'An anticoagulant protein that activates protein C; available in Japan for DIC treatment and showing mortality benefit in retrospective studies of heat stroke-related coagulopathy' },
        { term: 'splanchnic vasoconstriction', definition: 'The redirection of blood flow away from the intestinal circulation during heat stress to support cutaneous vasodilation for cooling, causing intestinal ischemia that precipitates gut barrier failure' },
      ],
      clinicalNotes: `Graduate-level clinical considerations:

1. **CWI superiority**: Cold water immersion remains the gold standard. Intravascular cooling catheters are an alternative when CWI is not feasible, but they achieve slower cooling rates. The time to initiate ANY cooling is more important than the specific modality.

2. **Rectal thermometry**: Insist on continuous rectal temperature monitoring. Esophageal probes are acceptable in intubated patients. All other methods (oral, axillary, tympanic, temporal artery) are unreliable in heat illness and should not be used for clinical decisions.

3. **Hepatic injury trajectory**: AST/ALT may continue to rise for 3-4 days after cooling is achieved. A second peak suggests ongoing injury. Early hepatology consultation for patients with AST >3000 U/L or INR >2.0.

4. **Rhabdomyolysis management**: Target urine output of 200-300 mL/hr (not the standard 0.5-1 mL/kg/hr). Bicarbonate-enhanced alkaline diuresis remains controversial but widely practiced. Monitor compartment pressures in severe cases.

5. **DIC management**: Treat the underlying hyperthermia first. Replacement therapy (FFP, cryoprecipitate, platelets) is indicated for active bleeding, not for laboratory abnormalities alone. Antithrombin III concentrate may have a role but evidence is limited to case series.

6. **Return to activity**: Heat tolerance testing at 4-6 weeks is essential before clearing athletes or military personnel for return to high-heat activities. Persistent heat intolerance occurs in a subset of patients and requires permanent activity modification.`,
    },
    5: {
      level: 5,
      summary: 'Contemporary heat stroke research encompasses the interplay of genomic susceptibility factors, the microbiome-gut-brain axis in thermoregulatory failure, emerging pharmacological targets (IL-1 blockade, TLR4 antagonists), climate change-driven epidemiology, and systems-based prevention frameworks. The growing burden of heat-related mortality demands translation of basic science into public health action.',
      explanation: `## Heat Stroke: Professional-Level Review

### Genomic and Molecular Susceptibility

**Genetic Polymorphisms:**
- HSP70 gene variants (HSPA1A, HSPA1B): Polymorphisms affecting HSP70 expression levels may influence heat tolerance
- IL-6 promoter polymorphisms: Affect the magnitude of the inflammatory response to thermal stress
- Malignant hyperthermia susceptibility genes (RYR1, CACNA1S): While MH and exertional heat stroke are distinct entities, there is emerging evidence of shared susceptibility pathways involving abnormal calcium handling in skeletal muscle
- ACE insertion/deletion polymorphism: May influence thermoregulatory capacity through effects on the renin-angiotensin system

**The Microbiome-Gut-Brain Axis:**
Emerging research suggests the gut microbiome influences heat tolerance:
- Short-chain fatty acids (SCFAs) produced by commensal bacteria maintain intestinal barrier integrity
- Dysbiosis (altered microbiome composition) may predispose to earlier intestinal barrier failure during heat stress
- Animal models show that probiotic supplementation reduces endotoxemia during heat exposure
- This opens potential therapeutic avenues for prevention, though human evidence is preliminary

### Emerging Pharmacological Targets

**Anti-Inflammatory Strategies:**
No pharmacological agent has proven efficacy in human heat stroke, but several targets are under investigation:

1. **IL-1 receptor antagonist (anakinra)**: IL-1beta is a key driver of the heat stroke inflammatory cascade. Anakinra has shown benefit in animal models of heat stroke and is well-tolerated in humans. Case reports suggest benefit.

2. **TLR4 antagonists (eritoran)**: Blocking the LPS-TLR4 signaling pathway that amplifies inflammation after gut-derived endotoxemia. Showed benefit in preclinical heat stroke models but failed in sepsis trials (ACCESS trial). Potential for heat stroke-specific use remains.

3. **Recombinant activated protein C**: Was withdrawn from the market for sepsis (PROWESS-SHOCK trial) but the coagulopathy of heat stroke may represent a more specific indication. No current trials.

4. **High-dose vitamin C**: Antioxidant properties may mitigate oxidative stress. Case series in heat stroke show possible benefit for hepatic protection. No RCTs available.

**Cooling Adjuncts:**
- **Intravenous cold saline**: RCTs in the pre-hospital setting for cardiac arrest (RINSE, PARAMEDIC2) showed no benefit for outcomes, but cold saline infusion is useful as a component of multi-modal cooling in heat stroke.
- **Intrathecal cooling**: Case reports of cold saline intrathecal injection for refractory cerebral hyperthermia. Experimental only.

### Climate Change and Heat-Related Mortality

**Epidemiological Trends:**
- The 2003 European heat wave caused an estimated 70,000 excess deaths
- The 2021 Pacific Northwest heat dome (US/Canada) caused over 1,400 excess deaths
- Global heat-related mortality is projected to increase 2.5-fold by 2050 under moderate emissions scenarios (Lancet Countdown)
- Urban heat island effect amplifies risk in cities (surfaces 5-10 degrees C warmer than surrounding rural areas)
- Disproportionate impact on low-income communities, outdoor workers, elderly, and those without air conditioning

**Occupational Heat Stress:**
- OSHA estimates thousands of occupational heat illness cases annually, with dozens of fatalities
- No federal heat stress standard exists (as of 2025), though rulemaking is in progress
- NIOSH recommended exposure limits (REL): Based on WBGT, work rate, and clothing
- Military: Department of Defense Heat Stress Flags (green/yellow/red/black) govern activity levels

### Systems-Based Prevention

**Public Health Frameworks:**
1. **Heat action plans**: City-level coordinated response to heat waves including early warning systems, cooling center activation, welfare check programs for vulnerable populations, and public messaging
2. **Workplace regulations**: Mandatory water, rest, and shade provisions; acclimatization protocols for new workers; emergency response planning
3. **Sports medicine protocols**: National Athletic Trainers' Association (NATA) and NCAA guidelines mandate on-site cold water immersion capability, WBGT monitoring, and written emergency action plans

**Predictive Modeling:**
- Machine learning models integrating weather data, population vulnerability indices, and health system capacity to predict heat-related morbidity
- Real-time syndromic surveillance using ED visit data and ambulance dispatch codes
- These models enable proactive resource deployment during heat events

### Exertional Heat Stroke in Athletes — Current Best Practice

**The Korey Stringer Institute (KSI) Recommendations:**
Named after the NFL player who died of exertional heat stroke in 2001, KSI guidelines include:
- Mandate cold water immersion tubs at all outdoor practices and events
- Rectal thermometry must be available for suspected heat stroke
- "Cool first, transport second" protocol: Begin CWI immediately, transport only after core temperature drops below 39 degrees C
- Implementation of these protocols in specific states (Georgia, Connecticut) has reduced EHS mortality to near-zero

**Wet Bulb Temperature and Human Survivability:**
- Theoretical upper limit of human thermoregulatory capacity: Wet bulb temperature of 35 degrees C (95 degrees F)
- Above this threshold, evaporative cooling becomes physically impossible regardless of shade, wind, or hydration
- Recent studies suggest the practical limit is lower (approximately 31 degrees C wet bulb for active individuals)
- Climate projections indicate parts of South Asia and the Persian Gulf may regularly exceed this threshold by 2050-2070`,
      keyTerms: [
        { term: 'Korey Stringer Institute', definition: 'A research and advocacy organization at the University of Connecticut focused on preventing sudden death in sport, whose evidence-based exertional heat stroke protocols have demonstrably reduced mortality where implemented' },
        { term: 'wet bulb temperature', definition: 'A composite measure of temperature and humidity representing the theoretical limit of evaporative cooling; at wet bulb temperatures above approximately 35 degrees C, the human body cannot dissipate metabolic heat, making outdoor activity potentially lethal' },
        { term: 'anakinra', definition: 'A recombinant IL-1 receptor antagonist under investigation as an anti-inflammatory agent for heat stroke, targeting the IL-1beta-driven cytokine cascade that drives the systemic inflammatory response' },
        { term: 'urban heat island effect', definition: 'The phenomenon where urban areas are significantly warmer than surrounding rural areas due to heat-absorbing surfaces, reduced vegetation, and waste heat, amplifying heat-related health risks for city populations' },
        { term: 'short-chain fatty acids', definition: 'Metabolites produced by gut microbiota through fermentation of dietary fiber that maintain intestinal barrier integrity; their role in heat tolerance through the microbiome-gut-brain axis is an emerging area of research' },
        { term: 'Lancet Countdown', definition: 'An international research collaboration tracking the health impacts of climate change, projecting that heat-related mortality will increase 2.5-fold by 2050 without significant emissions reductions' },
      ],
      clinicalNotes: `Professional-level considerations:

1. **Climate adaptation urgency**: Heat-related mortality is the most direct and measurable health consequence of climate change. Healthcare systems must develop heat emergency preparedness plans, including surge capacity for heat waves.

2. **Anakinra as rescue therapy**: For refractory heat stroke with persistent SIRS despite adequate cooling, consider anakinra 100 mg IV/SC as compassionate use. Evidence is limited to case reports and animal data, but the risk-benefit may favor intervention in severe cases.

3. **Hepatic monitoring**: All heat stroke patients should have daily LFTs for at least 5 days. Hepatic failure may present as late as day 3-5. Early hepatology and transplant center consultation for patients with rapidly rising transaminases or coagulopathy.

4. **Long-term follow-up**: Establish a standardized follow-up protocol including heat tolerance testing at 4-6 weeks, neuropsychological assessment at 3 months, and ongoing monitoring for chronic kidney disease in patients who had rhabdomyolysis-associated AKI.

5. **Workplace advocacy**: In the absence of a federal OSHA heat standard, clinicians treating occupational heat illness should document cases and advocate for workplace protections. Heat illness is underreported; improved surveillance is needed.

6. **Wet bulb survivability**: As climate change progresses, clinicians and public health professionals will encounter populations exposed to conditions approaching the limits of human thermoregulatory capacity. This requires unprecedented prevention infrastructure including cooling centers, work schedule modification, and potentially migration.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'cite-heat-1',
      type: 'guideline',
      title: 'Heat-Related Illness Prevention and Treatment',
      source: 'American Red Cross',
      url: 'https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/heat-wave.html',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cite-heat-2',
      type: 'guideline',
      title: 'Warning Signs and Symptoms of Heat-Related Illness',
      source: 'Centers for Disease Control and Prevention (CDC)',
      url: 'https://www.cdc.gov/disasters/extremeheat/warning.html',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cite-heat-3',
      type: 'guideline',
      title: 'Emergency Cardiovascular Care and Heat Stroke',
      source: 'American Heart Association',
      url: 'https://cpr.heart.org/en/resources/first-aid',
      accessedDate: '2025-01-15',
    },
  ],

  crossReferences: [
    {
      targetId: 'topic-when-to-call-911',
      targetType: 'topic',
      relationship: 'related',
      label: 'When to Call 911',
    },
    {
      targetId: 'topic-natural-disaster-preparedness',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Natural Disaster Preparedness',
    },
  ],

  tags: {
    systems: ['neurological', 'cardiovascular', 'renal', 'hepatic'],
    topics: ['emergency-care', 'environmental-medicine', 'heat-illness'],
    keywords: ['heat stroke', 'hyperthermia', 'cold water immersion', 'heat exhaustion', 'rhabdomyolysis', 'climate change'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
