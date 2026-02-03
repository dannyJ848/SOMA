/**
 * Altitude Sickness - Travel Medicine
 *
 * Comprehensive content on high altitude illness, including acute mountain
 * sickness, HACE, and HAPE, with prevention and treatment strategies.
 */

import { EducationalContent } from '../types';

export const altitudeSickness: EducationalContent = {
  id: 'travel-altitude-sickness',
  type: 'concept',
  name: 'Altitude Sickness',
  alternateNames: ['Acute Mountain Sickness', 'High Altitude Illness', 'Mountain Sickness', 'AMS'],

  levels: {
    1: {
      level: 1,
      summary: 'Altitude sickness happens when you go to high places too quickly and your body has trouble adjusting to having less oxygen in the air.',
      explanation: `When you climb a mountain or travel to a high place, the air has less oxygen than at lower elevations. This can make you feel sick until your body adjusts.

**Why It Happens:**
- At high altitudes, the air is "thinner" (less oxygen)
- Your body needs time to get used to less oxygen
- Going too high too fast causes problems

**Where It Can Happen:**
- Mountain hiking and climbing
- Skiing at high altitude resorts
- Traveling to high cities (like Denver, Cusco, or La Paz)
- Generally above 8,000 feet (2,500 meters)

**Common Symptoms:**
- Headache (most common)
- Feeling tired and weak
- Nausea or vomiting
- Difficulty sleeping
- Dizziness
- Loss of appetite

**Serious Warning Signs (Get Help Immediately):**
- Severe headache that does not get better
- Confusion or acting strange
- Trouble walking straight
- Shortness of breath while resting
- Coughing up pink or bloody fluid

**How to Prevent Altitude Sickness:**
- **Go up slowly** - Give your body time to adjust
- **Rest when you first arrive** - Do not exercise hard the first day
- **Stay hydrated** - Drink lots of water
- **Avoid alcohol** - It can make symptoms worse
- **Eat light meals** - Heavy food can make you feel worse

**The Golden Rules:**
1. If you feel sick, do not go higher
2. If you feel worse, go lower immediately
3. Do not leave someone with altitude sickness alone

**Treatment:**
- Go to a lower altitude
- Rest
- Drink fluids
- Pain medicine for headache
- Severe cases need medical help

**Planning Your Trip:**
- If possible, sleep at a lower altitude than your highest point of the day
- Spend extra days adjusting before going very high
- Know where medical help is available`,
      keyTerms: [
        { term: 'altitude', definition: 'How high a place is above sea level' },
        { term: 'acclimatization', definition: 'Your body slowly getting used to having less oxygen at high altitude' },
        { term: 'oxygen', definition: 'A gas in the air that your body needs to survive and make energy' },
      ],
      analogies: [
        'Going to high altitude is like jumping into cold water - if you do it slowly, your body can adjust, but jumping in too fast can be a shock.',
        'Your body at altitude is like a car engine at high elevation - it needs time to adjust to work properly with less air.',
      ],
      examples: [
        'Hikers climbing mountains often take several days to reach the top, stopping to sleep at camps along the way so their bodies can adjust.',
        'Tourists visiting Machu Picchu in Peru often spend a day or two in Cusco first to get used to the altitude.',
      ],
      patientCounselingPoints: [
        'Altitude sickness can happen to anyone, regardless of how fit you are.',
        'Listen to your body - headaches and nausea are warning signs.',
        'Going down is always the best treatment when symptoms get worse.',
      ],
    },
    2: {
      level: 2,
      summary: 'Altitude sickness encompasses a spectrum of conditions from mild acute mountain sickness (AMS) to life-threatening high altitude pulmonary edema (HAPE) and high altitude cerebral edema (HACE), caused by reduced oxygen availability at elevation.',
      explanation: `## Understanding High Altitude

**Altitude Classifications:**
| Category | Elevation | Effects |
|----------|-----------|---------|
| High altitude | 1500-3500m (5000-11,500ft) | Decreased exercise performance |
| Very high altitude | 3500-5500m (11,500-18,000ft) | AMS common, acclimatization essential |
| Extreme altitude | >5500m (>18,000ft) | Severe hypoxia, prolonged stay dangerous |

**Why Altitude Affects the Body:**
- Atmospheric pressure decreases with elevation
- Less oxygen available per breath
- At 5500m: Only ~50% of sea-level oxygen
- Body compensates but needs time

## Types of Altitude Illness

**1. Acute Mountain Sickness (AMS):**
Most common form, usually mild to moderate.

*Symptoms:*
- Headache (required for diagnosis)
- Plus one or more: Nausea, fatigue, dizziness, sleep disturbance
- Usually starts 6-12 hours after arrival
- Peaks at 24-72 hours

*Lake Louise Scoring System:*
| Symptom | 0 | 1 | 2 | 3 |
|---------|---|---|---|---|
| Headache | None | Mild | Moderate | Severe |
| GI symptoms | None | Poor appetite/nausea | Moderate | Severe vomiting |
| Fatigue/weakness | None | Mild | Moderate | Severe |
| Dizziness | None | Mild | Moderate | Severe |

Score ≥3 with headache = AMS diagnosis

**2. High Altitude Cerebral Edema (HACE):**
Severe, life-threatening brain swelling.

*Symptoms:*
- AMS symptoms plus:
- Ataxia (loss of coordination, stumbling gait)
- Altered mental status (confusion, drowsiness)
- Can progress to coma within hours

*Warning:* HACE is a medical emergency

**3. High Altitude Pulmonary Edema (HAPE):**
Fluid accumulation in the lungs.

*Symptoms:*
- Decreased exercise tolerance
- Dry cough, later productive with pink/frothy sputum
- Breathlessness at rest
- Crackles/rales on examination
- Cyanosis (blue lips/fingernails)

*Warning:* HAPE is a medical emergency

## Risk Factors

| Factor | Effect on Risk |
|--------|---------------|
| Rate of ascent | Faster ascent = higher risk |
| Sleeping altitude | Sleeping high = higher risk |
| Previous AMS | Prior episodes = higher risk |
| Home altitude | Sea level residents = higher risk |
| Physical exertion | Heavy exertion = higher risk |
| Individual susceptibility | Varies person to person |

**Not Protective:**
- Physical fitness (does not prevent AMS)
- Young age (children may be at higher risk)
- Prior altitude experience without problems

## Prevention

**Gradual Ascent:**
- Above 3000m: Increase sleeping altitude by ~300-500m/day
- Rest day every 1000m gained
- "Climb high, sleep low" strategy

**Medications:**
| Drug | Use | Dose |
|------|-----|------|
| Acetazolamide (Diamox) | Prevention and treatment | 125-250 mg twice daily |
| Dexamethasone | Prevention (second line), treatment | 2-4 mg every 6-12 hours |
| Nifedipine | HAPE prevention | 30 mg extended release twice daily |
| Tadalafil/Sildenafil | HAPE prevention | Variable dosing |

**Acetazolamide Notes:**
- Start day before or day of ascent
- Continue 2-3 days at highest altitude
- Causes tingling (paresthesias) - normal
- Avoid if severe sulfa allergy

## Treatment

**AMS Treatment:**
1. Stop ascending
2. Symptom treatment (acetaminophen, anti-nausea)
3. Acetazolamide to speed acclimatization
4. If no improvement: Descend
5. If worsening: Descend immediately

**HACE Treatment:**
1. Descend immediately (at least 300-1000m)
2. Dexamethasone 8mg then 4mg every 6 hours
3. Supplemental oxygen if available
4. Portable hyperbaric chamber if descent impossible

**HAPE Treatment:**
1. Descend immediately
2. Supplemental oxygen (2-4 L/min)
3. Nifedipine or phosphodiesterase inhibitors
4. Keep warm, minimize exertion
5. Portable hyperbaric chamber if available`,
      keyTerms: [
        { term: 'AMS', definition: 'Acute Mountain Sickness; the most common form of altitude illness with headache and other symptoms' },
        { term: 'HACE', definition: 'High Altitude Cerebral Edema; dangerous brain swelling causing confusion and coordination problems' },
        { term: 'HAPE', definition: 'High Altitude Pulmonary Edema; dangerous fluid in the lungs causing breathing difficulty' },
        { term: 'acclimatization', definition: 'Physiological adaptation to decreased oxygen at high altitude' },
        { term: 'hypoxia', definition: 'Insufficient oxygen reaching body tissues' },
      ],
      analogies: [
        'Acclimatization is like learning a new skill - your body needs practice and time to perform well with less oxygen.',
        'HAPE is like a tire slowly filling with water instead of air - it gets harder and harder to breathe.',
      ],
    },
    3: {
      level: 3,
      summary: 'High altitude illness pathophysiology involves hypoxic ventilatory response, cerebral and pulmonary vascular changes, and fluid shifts, with prevention and treatment strategies targeting these mechanisms.',
      explanation: `## Pathophysiology of Altitude Illness

**Hypobaric Hypoxia:**
\`\`\`
Barometric pressure decreases with altitude:
- Sea level: 760 mmHg
- 3000m: 526 mmHg (69% of sea level)
- 5500m: 379 mmHg (50% of sea level)

Inspired PO2 = (Barometric pressure - 47) × 0.21
\`\`\`

**Acute Responses to Altitude:**

*Ventilatory Response:*
- Hypoxia stimulates peripheral chemoreceptors (carotid bodies)
- Increased minute ventilation
- Respiratory alkalosis from CO2 washout
- Individual variation in hypoxic ventilatory response (HVR)
- Low HVR = higher AMS risk

*Cardiovascular Response:*
- Increased heart rate
- Increased cardiac output
- Systemic vasodilation (initial)
- Pulmonary vasoconstriction (hypoxic pulmonary vasoconstriction - HPV)

**Acclimatization Mechanisms:**

| Timeframe | Adaptation |
|-----------|------------|
| Hours | Increased ventilation |
| Days | Renal bicarbonate excretion (compensates alkalosis) |
| Days | Increased erythropoietin, red cell production begins |
| Weeks | Increased 2,3-DPG (right-shifts O2-Hb curve) |
| Weeks-months | Increased capillary density |

## AMS Pathophysiology

**Leading Theories:**

*Cerebral Edema Continuum:*
- Mild cerebral edema contributes to AMS symptoms
- HACE represents severe end of spectrum
- MRI studies show brain swelling in AMS

*Mechanisms:*
| Mechanism | Effect |
|-----------|--------|
| Vasodilation | Increased cerebral blood flow, pressure |
| Blood-brain barrier dysfunction | Increased permeability |
| Free radical formation | Cellular damage |
| Cytokine release | Inflammation |

**Cerebral Hemodynamics:**
- Hypoxia causes cerebral vasodilation
- Increased cerebral blood volume
- Intracranial pressure elevation
- Blood-brain barrier leakage

## HACE Pathophysiology

**Advanced Cerebral Edema:**
- Vasogenic edema (BBB breakdown)
- Cytotoxic edema (cellular dysfunction)
- Microhemorrhages (severe cases)
- Posterior predominance on imaging

**Clinical Progression:**
\`\`\`
Severe AMS → Early HACE → Progressive HACE → Coma → Death
Hours to days without treatment
\`\`\`

## HAPE Pathophysiology

**Pulmonary Vascular Changes:**

*Hypoxic Pulmonary Vasoconstriction (HPV):*
- Normal response to regional hypoxia (redirects blood)
- At altitude: Global hypoxia causes global HPV
- Elevated pulmonary artery pressure
- Non-uniform vasoconstriction creates overperfusion in some areas

*Pathophysiologic Sequence:*
1. Hypoxic pulmonary vasoconstriction
2. Pulmonary hypertension
3. Capillary stress failure (high pressure)
4. Protein-rich fluid leaks into alveoli
5. Impaired gas exchange worsens hypoxia
6. Positive feedback loop

**Risk Factors for HAPE:**
| Factor | Mechanism |
|--------|-----------|
| Prior HAPE | Exaggerated HPV response |
| Respiratory infection | Increased pulmonary vascular resistance |
| Cold exposure | Increased catecholamines, HPV |
| Exercise | Increased cardiac output, pulmonary pressures |
| Rapid ascent | Insufficient adaptation time |
| Congenital pulmonary abnormalities | Reduced vascular reserve |

## Pharmacological Interventions

**Acetazolamide (Carbonic Anhydrase Inhibitor):**

*Mechanisms:*
- Renal bicarbonate excretion
- Metabolic acidosis stimulates ventilation
- Mimics acclimatization
- May reduce CSF production

*Dosing:*
| Indication | Dose | Timing |
|------------|------|--------|
| Prevention | 125-250 mg BID | Start 1 day before, continue 2 days at altitude |
| Treatment | 250 mg BID-TID | Until symptoms resolve |

*Side Effects:*
- Paresthesias (common, harmless)
- Polyuria
- Altered taste (carbonated drinks)
- Rarely: Severe sulfonamide reactions

**Dexamethasone:**

*Mechanisms:*
- Reduces cerebral edema
- Decreases inflammation
- Does NOT enhance acclimatization

*Dosing:*
| Indication | Dose |
|------------|------|
| Prevention | 2 mg q6h or 4 mg q12h |
| AMS treatment | 4 mg q6h |
| HACE treatment | 8 mg initially, then 4 mg q6h |

**Nifedipine/PDE-5 Inhibitors (HAPE):**

*Mechanisms:*
- Pulmonary vasodilation
- Reduces pulmonary artery pressure
- Decreases capillary hydrostatic pressure

*Dosing:*
| Drug | Prevention | Treatment |
|------|------------|-----------|
| Nifedipine ER | 30 mg q12h | 30 mg q12h |
| Tadalafil | 10 mg q12h | 10 mg q12h |
| Sildenafil | 50 mg q8h | 50 mg q8h |`,
      keyTerms: [
        { term: 'hypoxic ventilatory response', definition: 'HVR; the increase in breathing that occurs in response to low oxygen levels; varies between individuals' },
        { term: 'hypoxic pulmonary vasoconstriction', definition: 'HPV; constriction of pulmonary blood vessels in response to low oxygen, causing pulmonary hypertension at altitude' },
        { term: 'vasogenic edema', definition: 'Brain swelling due to blood-brain barrier leakage allowing fluid into brain tissue' },
        { term: 'barometric pressure', definition: 'Atmospheric pressure that decreases with altitude, reducing available oxygen' },
      ],
      clinicalNotes: 'The combination of acetazolamide and dexamethasone is more effective than either alone for AMS prevention in rapid ascent scenarios. However, dexamethasone masks symptoms without enhancing acclimatization - use caution about continued ascent.',
    },
    4: {
      level: 4,
      summary: 'Advanced altitude medicine encompasses genetic susceptibility factors, specialized diagnostic approaches, complex management scenarios, and expedition medical planning integrating environmental and physiological considerations.',
      explanation: `## Genetic and Individual Susceptibility

**Genetic Variants Associated with Altitude Illness:**

| Gene | Function | Association |
|------|----------|-------------|
| EPAS1 | HIF-2α (transcription factor) | Tibetan adaptation, AMS protection |
| EGLN1 | PHD2 (HIF regulator) | High altitude adaptation |
| ACE I/D | Angiotensin-converting enzyme | Variable AMS/HAPE risk |
| eNOS | Nitric oxide production | Pulmonary vascular response |
| VEGF | Vascular permeability | Edema formation |

**Predictive Testing:**

*Hypoxic Challenge Test:*
- Breathing 12.5% O2 simulates ~4000m
- Measures HVR, SpO2 response
- Limited positive predictive value
- May identify highly susceptible individuals

*Prior HAPE History:*
- 60-70% recurrence rate
- Strongest predictor
- Requires aggressive prophylaxis

## Advanced Diagnostics

**Lake Louise Score (2018 Update):**

*AMS Diagnosis:*
- Headache (required)
- Plus score ≥3 on 0-3 scale for:
  - Headache severity
  - GI symptoms
  - Fatigue/weakness
  - Dizziness/lightheadedness

*Separate Assessment for:*
- Clinical functional score
- HACE criteria (ataxia and/or altered mental status)

**HAPE Diagnostic Criteria:**
| Required | Plus ≥2 Symptoms | Plus ≥2 Signs |
|----------|------------------|---------------|
| Recent altitude gain | Dyspnea at rest | Crackles/wheezing |
| | Cough | Central cyanosis |
| | Weakness/decreased exercise | Tachypnea |
| | Chest tightness | Tachycardia |

**Field Assessment Tools:**

*SpO2 Monitoring:*
- Useful adjunct
- SpO2 <80% at 4500m concerning
- Drop >10% with exercise may predict HAPE
- Limitation: Cold, poor perfusion affect accuracy

*Ataxia Testing:*
- Tandem gait (heel-to-toe walking)
- Can detect early HACE
- Baseline recommended before ascent

## Complex Management Scenarios

**HAPE with HACE:**
- Life-threatening combination
- Prioritize descent above all
- Supplemental O2 critical
- Dexamethasone for cerebral component
- Nifedipine for pulmonary component
- Portable hyperbaric chamber if available
- Do not delay evacuation for treatment

**Altitude Illness in Remote Settings:**

*Portable Hyperbaric Chambers:*
| Device | Pressure | Duration | Benefit |
|--------|----------|----------|---------|
| Gamow bag | 2 psi (~1500m descent) | 1-4 hours | Temporary stabilization |
| Certec | Similar | Similar | Alternative design |

*Indications:*
- HACE/HAPE when descent impossible
- Temporary measure only
- Symptoms recur when removed
- Does not replace descent

**Altitude and Pre-existing Conditions:**

| Condition | Risk | Management |
|-----------|------|------------|
| Coronary artery disease | Increased cardiac work | Medical clearance, gradual ascent, supplemental O2 available |
| Heart failure | Decompensation risk | Generally avoid high altitude |
| COPD (mild-moderate) | Possible, with caution | Supplemental O2, conservative altitude |
| Pregnancy | Limited data | Generally avoid >3000m |
| Sickle cell trait | Splenic syndrome risk | Cautious ascent, hydration |
| Prior HAPE | High recurrence | Nifedipine prophylaxis mandatory |
| Seizure disorder | Hypoxia may lower threshold | Medication adherence, gradual ascent |

## Expedition Medicine Planning

**Pre-Expedition Assessment:**

*Medical History Review:*
- Cardiovascular disease
- Pulmonary disease
- Neurological conditions
- Prior altitude illness
- Current medications

*Exercise Testing:*
- Maximal exercise capacity
- ECG evaluation
- Consider echocardiography (pulmonary pressures)

**Ascent Profile Planning:**

*Conservative Schedule for Trekking:*
| Altitude Range | Maximum Daily Ascent | Rest Days |
|----------------|---------------------|-----------|
| 2500-3000m | 500m/day | Every 3-4 days |
| 3000-4000m | 400m/day | Every 3 days |
| 4000-5000m | 300m/day | Every 2-3 days |
| >5000m | Very gradual | Frequent |

**Medical Kit for Altitude:**

| Category | Items |
|----------|-------|
| Prevention | Acetazolamide, nifedipine, dexamethasone |
| Treatment | Above + oxygen, pulse oximeter |
| Rescue | Portable hyperbaric chamber |
| Monitoring | Pulse oximeter, thermometer |
| Supportive | Analgesics, antiemetics, oral rehydration |

## Timing of Return to Altitude

**After AMS:**
- Resolve at current altitude before ascending
- Consider acetazolamide prophylaxis
- Monitor closely during re-ascent

**After HACE:**
- Complete recovery essential (may take weeks)
- Medical evaluation before next attempt
- Consider underlying susceptibility
- Aggressive prophylaxis if attempting again

**After HAPE:**
- Pulmonary evaluation before return
- Echocardiography to assess pulmonary pressures
- Nifedipine or PDE-5 inhibitor prophylaxis
- Very gradual ascent
- SpO2 monitoring during ascent`,
      keyTerms: [
        { term: 'Lake Louise Score', definition: 'Standardized symptom questionnaire for diagnosing and grading acute mountain sickness severity' },
        { term: 'Gamow bag', definition: 'Portable hyperbaric chamber used to simulate descent in emergency altitude illness treatment' },
        { term: 'EPAS1', definition: 'Gene encoding HIF-2α; variants associated with high altitude adaptation in Tibetan populations' },
        { term: 'hypoxic challenge test', definition: 'Assessment breathing low-oxygen mixture to evaluate individual response to simulated altitude' },
      ],
      clinicalNotes: 'Patients with prior HAPE have a 60-70% recurrence risk and require mandatory prophylaxis with nifedipine or a PDE-5 inhibitor. Post-HAPE evaluation should include echocardiography to assess for abnormal pulmonary artery pressures that may indicate underlying susceptibility.',
    },
    5: {
      level: 5,
      summary: 'Expert altitude medicine integrates advanced physiological monitoring, research-driven protocols, extreme environment medicine principles, and emerging therapeutic approaches within comprehensive wilderness and expedition medicine frameworks.',
      explanation: `## Advanced Physiological Monitoring

**Continuous Monitoring Technologies:**

| Parameter | Technology | Application |
|-----------|------------|-------------|
| SpO2/HR | Continuous pulse oximetry | Early HAPE detection |
| Sleep quality | Actigraphy | Periodic breathing assessment |
| Cerebral oxygenation | NIRS | Research, HACE prediction |
| Cardiac output | Impedance cardiography | Research settings |
| Pulmonary pressures | Portable echo | HAPE susceptibility |

**Exercise Testing at Altitude:**

*Submaximal Testing Protocol:*
- Step test or walking protocol
- SpO2 desaturation during exercise
- Heart rate response
- Recovery characteristics
- Predictive of HAPE susceptibility

*Research Applications:*
- VO2 max changes with altitude
- Lactate threshold shifts
- Cardiac limitation vs. ventilatory limitation

**Sleep and Periodic Breathing:**

*High Altitude Periodic Breathing:*
- Cheyne-Stokes pattern
- Alternating hyperpnea and central apnea
- More pronounced during sleep
- Related to HVR magnitude
- Contributes to poor sleep quality, hypoxemia

*Impact:*
| Severity | SpO2 Nadir | AMS Association |
|----------|------------|-----------------|
| Mild | >80% | Minimal |
| Moderate | 70-80% | Moderate |
| Severe | <70% | Strong |

*Treatment:*
- Acetazolamide reduces periodic breathing
- CPAP (if available)
- Supplemental O2

## Research-Driven Protocols

**Prevention Protocol Optimization:**

*Combined Pharmacotherapy:*
| Regimen | Evidence Level | Use Case |
|---------|----------------|----------|
| Acetazolamide alone | Strong | Standard prevention |
| Dexamethasone alone | Moderate | Acetazolamide contraindication |
| ACZ + DEX | Limited but supportive | Very rapid ascent |
| Ibuprofen | Emerging | Adjunctive prevention |

*Ibuprofen for AMS Prevention:*
- Several RCTs show benefit
- 600 mg TID started 6 hours before ascent
- Mechanism: Anti-inflammatory, reduced vasogenic edema
- Concerns: Renal effects at altitude, GI bleeding

**HAPE-Susceptible Protocol:**

\`\`\`
Pre-ascent evaluation:
- Echocardiography (pulmonary pressures)
- Consider hypoxic challenge
- Document prior HAPE history

Prophylaxis (start 1 day before ascent):
- Nifedipine ER 30 mg BID
  OR
- Tadalafil 10 mg BID
  OR
- Sildenafil 50 mg TID

Continue until descent below 2500m or 4+ days at highest altitude

Monitoring:
- Twice daily SpO2
- Symptom diary
- Exercise tolerance assessment

Action threshold:
- SpO2 <80% at rest (4500m level)
- Exercise SpO2 drop >20%
- Onset of cough, dyspnea at rest
\`\`\`

## Extreme Altitude Physiology

**Adaptation Limits:**

*Maximum Altitude for Permanent Habitation:*
- ~5500m (world's highest villages)
- Above this: Deterioration over time
- Weight loss, cognitive decline, chronic mountain sickness

*Summit Hypoxia (8848m Everest):*
- PiO2 ~43 mmHg (sea level ~150 mmHg)
- Calculated alveolar PO2 ~35 mmHg
- Marginally compatible with consciousness
- Requires near-maximal hyperventilation
- Some individuals cannot summit without supplemental O2

**Chronic Mountain Sickness (CMS):**

*Monge's Disease:*
- Develops in long-term altitude residents
- Excessive erythrocytosis
- Pulmonary hypertension
- Symptoms: Headache, fatigue, cyanosis, cognitive impairment

*Diagnostic Criteria (Qinghai Score):*
| Finding | Points |
|---------|--------|
| Hb >21 (M) or >19 (F) | 3 |
| Dyspnea | 1-3 |
| Sleep disturbance | 1-3 |
| Cyanosis | 1-3 |
| Paresthesias | 1-3 |
| Headache | 1-3 |
| Tinnitus | 1-3 |

## Emerging Therapeutics

**Novel Pharmacological Approaches:**

| Agent | Mechanism | Status |
|-------|-----------|--------|
| Iron chelators (Deferoxamine) | HIF modulation | Research |
| Budesonide inhaled | Pulmonary inflammation | Small trials |
| Sumatriptan | Cerebral vasoconstriction | Case reports |
| Theophylline | Respiratory stimulant | Limited use |

**Gene Therapy Concepts:**
- EPAS1 modulation
- EPO pathway targeting
- Currently theoretical

**Device-Based Interventions:**

*Altitude Simulation Tents:*
- Pre-acclimatization at sea level
- Sleep in hypoxic environment
- Evidence: Mixed, may provide benefit
- Limitation: Time-intensive

*Supplemental Oxygen Delivery:*
- Portable oxygen concentrators
- Lightweight systems for expeditions
- Titration protocols for efficiency

## Wilderness Medicine Systems

**Evacuation Decision-Making:**

*Factors Favoring Evacuation:*
| Clinical | Logistical |
|----------|------------|
| HACE (any severity) | Remote location |
| HAPE (moderate-severe) | Weather window available |
| Deteriorating despite treatment | Distance from care |
| Other medical emergency | Group safety concerns |

*Communication Systems:*
- Satellite communicators (inReach, SPOT)
- Satellite phones
- Pre-arranged check-in protocols
- Emergency beacon (PLB)

**Telemedicine Integration:**
- Remote physician consultation
- Image/video transmission capability
- Electronic medical records access
- Pre-trip telemedicine briefing

## Training and Credentialing

**Wilderness Medicine Certification:**
| Organization | Certification | Focus |
|--------------|---------------|-------|
| WMS | FAWM, DiMM | Wilderness medicine |
| NOLS | WFR, WEMT | Field provider |
| ASTM | Various | Standards development |

**Expedition Medical Officer Role:**
- Pre-expedition health screening
- Medical kit preparation
- Protocol development
- Real-time medical decision-making
- Evacuation coordination
- Post-expedition assessment

**Research Ethics at Altitude:**
- Informed consent challenges
- Hypoxia and decision-making capacity
- Emergency research protocols
- Data collection in extreme environments`,
      keyTerms: [
        { term: 'chronic mountain sickness', definition: 'Monge\'s disease; condition in long-term altitude residents with excessive red blood cell production and pulmonary hypertension' },
        { term: 'high altitude periodic breathing', definition: 'Cheyne-Stokes pattern during sleep at altitude with alternating hyperpnea and apnea' },
        { term: 'NIRS', definition: 'Near-infrared spectroscopy; non-invasive measurement of tissue oxygenation including cerebral' },
        { term: 'DiMM', definition: 'Diploma in Mountain Medicine; advanced wilderness medicine credential' },
      ],
      clinicalNotes: `Expert Practice Points:
1. Ibuprofen shows promise for AMS prevention but requires validation and attention to renal/GI risks
2. Sleep-related hypoxemia from periodic breathing contributes significantly to altitude illness pathophysiology
3. Chronic mountain sickness affects long-term altitude residents and requires different management than acute illness
4. Pre-acclimatization with hypoxic tents may provide benefit but evidence is limited
5. Telemedicine integration is transforming expedition medicine capabilities
6. Exercise testing for HAPE susceptibility identification remains a valuable clinical tool
7. Research at extreme altitude requires special ethical considerations given hypoxic cognitive effects`,
    },
  },

  media: [
    {
      id: 'altitude-illness-spectrum',
      type: 'diagram',
      filename: 'altitude-illness-spectrum.svg',
      title: 'Spectrum of Altitude Illness',
      description: 'Progression from AMS to HACE/HAPE with symptoms at each stage',
    },
    {
      id: 'ascent-profile',
      type: 'diagram',
      filename: 'ascent-profile.svg',
      title: 'Safe Ascent Profile',
      description: 'Recommended ascent rates and rest day schedules',
    },
  ],

  citations: [
    {
      id: 'wilderness-medical-society',
      type: 'article',
      title: 'Wilderness Medical Society Practice Guidelines for the Prevention and Treatment of Acute Altitude Illness',
      authors: ['Luks AM', 'Auerbach PS', 'Freer L', 'et al.'],
      source: 'Wilderness & Environmental Medicine',
      url: 'https://doi.org/10.1016/j.wem.2019.04.006',
    },
    {
      id: 'lake-louise-2018',
      type: 'article',
      title: 'The 2018 Lake Louise Acute Mountain Sickness Score',
      authors: ['Roach RC', 'Hackett PH', 'Oelz O', 'et al.'],
      source: 'High Altitude Medicine & Biology',
      url: 'https://doi.org/10.1089/ham.2017.0164',
    },
  ],

  crossReferences: [
    { targetId: 'travel-health-overview', targetType: 'concept', relationship: 'parent', label: 'Travel Health Overview' },
    { targetId: 'respiratory-physiology', targetType: 'concept', relationship: 'related', label: 'Respiratory Physiology' },
    { targetId: 'wilderness-medicine', targetType: 'concept', relationship: 'related', label: 'Wilderness Medicine' },
  ],

  tags: {
    systems: ['respiratory', 'neurological', 'cardiovascular'],
    topics: ['travel-medicine', 'wilderness-medicine', 'emergency-medicine'],
    keywords: ['altitude sickness', 'AMS', 'HACE', 'HAPE', 'mountain medicine', 'acclimatization'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency-medicine', 'medicine', 'pulmonology'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default altitudeSickness;
