/**
 * Shock Types and Management - Educational Content
 *
 * Comprehensive guide to understanding shock states,
 * recognition, classification, and treatment approaches.
 */

import { EducationalContent } from '../types';

export const shockTypesAndManagement: EducationalContent = {
  id: 'critical-care-shock-types-management',
  type: 'concept',
  name: 'Shock Types and Management',
  alternateNames: ['Circulatory Shock', 'Hemodynamic Failure', 'Hypoperfusion States'],

  levels: {
    1: {
      level: 1,
      summary: 'Shock is when your body is not getting enough blood flow to stay healthy. There are different causes, but all need quick treatment.',
      explanation: `## What is Shock?

Shock is a serious condition where your body's organs are not getting enough blood and oxygen. Without enough blood flow, organs can be damaged or stop working.

**Warning: Shock is a medical emergency that needs immediate care!**

## Signs That Someone May Be in Shock

- Very fast heart rate
- Weak pulse
- Fast breathing
- Pale, cold, or clammy skin
- Feeling very weak or dizzy
- Confusion or trouble thinking clearly
- Low blood pressure
- Not making much urine

## Types of Shock

Think of your body like a house with water pipes:

**1. Not Enough Water (Hypovolemic Shock)**
- The body loses too much blood or fluid
- Causes: Bleeding, severe vomiting/diarrhea, burns
- Like: The water tank is empty

**2. Pump Not Working (Cardiogenic Shock)**
- The heart cannot pump blood well enough
- Causes: Heart attack, heart failure
- Like: The water pump is broken

**3. Pipes Too Wide (Distributive Shock)**
- Blood vessels relax too much, so blood pressure drops
- Causes: Severe infection (sepsis), allergic reaction, spinal injury
- Like: The pipes are too wide for the amount of water

**4. Pipes Blocked (Obstructive Shock)**
- Something blocks blood from flowing properly
- Causes: Blood clot in lung, fluid around heart
- Like: Something is blocking the main pipe

## What Doctors Do

**Find the cause** - This is the most important step because treatment depends on the type.

**Give fluids** - For most shock types, fluids through an IV help fill up the blood vessels.

**Medications** - Some medicines can:
- Make blood vessels squeeze tighter to raise blood pressure
- Help the heart pump stronger
- Fight infection (antibiotics for sepsis)

**Fix the problem** - This might mean:
- Stopping bleeding with surgery
- Opening a blocked heart artery
- Treating a severe allergic reaction
- Draining fluid from around the heart

## How You Can Help

If you think someone is in shock:
1. Call 911 immediately
2. Have them lie down with legs elevated (if no head, neck, or leg injuries)
3. Keep them warm with a blanket
4. Do not give them anything to eat or drink
5. Stay with them until help arrives`,
      keyTerms: [
        { term: 'shock', definition: 'A dangerous condition where organs are not getting enough blood and oxygen' },
        { term: 'blood pressure', definition: 'The force of blood pushing against blood vessel walls' },
        { term: 'IV', definition: 'Intravenous - a tube that puts fluids or medicine directly into a vein' },
        { term: 'organs', definition: 'Body parts that do important jobs, like the heart, lungs, kidneys, and brain' },
      ],
      analogies: [
        'Shock is like a city with a water shortage - some neighborhoods (organs) start having problems because they are not getting enough water (blood).',
        'The heart is like a pump, blood vessels are like pipes, and blood is like the water - problems with any of these can cause shock.',
      ],
      examples: [
        'Someone who loses a lot of blood in a car accident may go into shock and need fluids and blood transfusions.',
        'A person having a severe allergic reaction to a bee sting can go into anaphylactic shock and needs epinephrine immediately.',
      ],
    },

    2: {
      level: 2,
      summary: 'Shock is circulatory failure resulting in inadequate tissue perfusion. The four main types are hypovolemic, cardiogenic, distributive, and obstructive, each requiring targeted treatment.',
      explanation: `## Understanding Shock

Shock occurs when the circulatory system fails to deliver adequate oxygen and nutrients to the body's tissues. Without proper blood flow, organs begin to fail.

### The Shock Triad

All shock involves problems with one or more of:
1. **Pump (Heart)** - The heart must pump effectively
2. **Pipes (Blood vessels)** - Blood vessels must maintain proper tone
3. **Volume (Blood)** - There must be enough blood in the system

## The Four Types of Shock

### 1. Hypovolemic Shock
**Cause**: Not enough blood volume in the circulation

| Subcategory | Examples |
|-------------|----------|
| Hemorrhagic | Trauma, GI bleeding, surgery, ruptured aneurysm |
| Non-hemorrhagic | Severe diarrhea/vomiting, burns, third-spacing |

**Signs**:
- Cold, pale, clammy skin
- Tachycardia (fast heart rate)
- Low blood pressure
- Flat neck veins
- Decreased urine output

**Treatment**: Replace volume (fluids, blood products)

### 2. Cardiogenic Shock
**Cause**: Heart fails as a pump

| Causes | Examples |
|--------|----------|
| Pump failure | Large heart attack (MI), end-stage heart failure |
| Valve problems | Acute mitral regurgitation, aortic stenosis |
| Arrhythmias | Very fast or very slow heart rhythms |

**Signs**:
- Cold, clammy skin
- Distended neck veins (JVD)
- Lung crackles (pulmonary edema)
- Weak heart sounds, murmurs

**Treatment**: Support heart function, fix underlying cause

### 3. Distributive Shock
**Cause**: Blood vessels dilate too much, losing vascular tone

| Subcategory | Trigger |
|-------------|---------|
| Septic shock | Severe infection |
| Anaphylactic | Allergic reaction |
| Neurogenic | Spinal cord injury |

**Signs**:
- Warm, flushed skin (initially in sepsis)
- Bounding pulses (early)
- Low blood pressure despite adequate volume
- Fever or low temperature (sepsis)

**Treatment**: Treat cause + vasopressors to tighten blood vessels

### 4. Obstructive Shock
**Cause**: Physical blockage prevents blood flow

| Cause | Mechanism |
|-------|-----------|
| Pulmonary embolism | Blocks blood flow through lungs |
| Cardiac tamponade | Fluid compresses the heart |
| Tension pneumothorax | Air pressure collapses lung and shifts heart |

**Signs**:
- Distended neck veins
- Muffled heart sounds (tamponade)
- Unequal breath sounds (pneumothorax)
- Signs of right heart strain

**Treatment**: Remove the obstruction

## Initial Management (All Types)

### ABCs First
- **A**irway: Ensure open and protected
- **B**reathing: Give oxygen, assist ventilation if needed
- **C**irculation: Establish IV access, give fluids

### Fluid Resuscitation
- Start with crystalloid (normal saline or lactated Ringer's)
- Give 500-1000 mL boluses, reassess after each
- In cardiogenic shock, be cautious with fluids

### Vasopressors
When fluids are not enough:
- Norepinephrine: First choice for most shock
- Epinephrine: Anaphylaxis, cardiac arrest
- Vasopressin: Added to norepinephrine in refractory shock

### Find and Treat the Cause
- Stop bleeding
- Treat infection with antibiotics
- Open blocked coronary arteries
- Drain tamponade or decompress pneumothorax

## Monitoring Response to Treatment

**Good signs**:
- Blood pressure improving
- Heart rate normalizing
- Urine output increasing (>0.5 mL/kg/hr)
- Mental status improving
- Lactate decreasing`,
      keyTerms: [
        { term: 'perfusion', definition: 'Blood flow delivering oxygen and nutrients to tissues', pronunciation: 'per-FYOO-zhun' },
        { term: 'vasopressor', definition: 'Medication that tightens blood vessels to raise blood pressure' },
        { term: 'cardiac tamponade', definition: 'Fluid around the heart that compresses it and prevents normal filling', pronunciation: 'TAM-poh-nade' },
        { term: 'lactate', definition: 'A waste product that builds up when tissues do not get enough oxygen' },
        { term: 'crystalloid', definition: 'IV fluid containing water and salts, like normal saline' },
      ],
      analogies: [
        'Vasopressors squeeze blood vessels like tightening a garden hose nozzle to increase water pressure.',
        'Cardiac tamponade is like putting your hand around a water balloon and squeezing - the heart cannot fill properly.',
      ],
      clinicalNotes: 'Early recognition and treatment of shock improves survival. Lactate level helps assess severity and response to treatment. Norepinephrine is the first-line vasopressor for most shock types.',
    },

    3: {
      level: 3,
      summary: 'Shock represents circulatory failure with tissue hypoperfusion. Classification into hypovolemic, cardiogenic, distributive, and obstructive types guides targeted resuscitation strategies using hemodynamic monitoring and evidence-based interventions.',
      explanation: `## Pathophysiology of Shock

### Cellular Level
- Inadequate oxygen delivery (DO2) relative to oxygen consumption (VO2)
- Shift to anaerobic metabolism
- Lactate production and metabolic acidosis
- Cellular dysfunction and death
- Inflammatory cascade activation

### Compensatory Mechanisms
1. **Sympathetic activation**: Tachycardia, vasoconstriction
2. **Hormonal response**: Renin-angiotensin, ADH, cortisol
3. **Fluid shifts**: Transcapillary refill
4. **When compensation fails**: Decompensated shock

### Oxygen Delivery Equation
DO2 = CO × CaO2 × 10

Where:
- CO = Cardiac Output (HR × SV)
- CaO2 = (Hgb × 1.34 × SaO2) + (0.003 × PaO2)

## Hemodynamic Profiles

| Shock Type | CVP | CO | SVR | SvO2 |
|------------|-----|-----|-----|------|
| Hypovolemic | ↓ | ↓ | ↑ | ↓ |
| Cardiogenic | ↑ | ↓↓ | ↑ | ↓ |
| Distributive | ↓/N | ↑/N | ↓↓ | ↑/N |
| Obstructive | ↑ | ↓ | ↑ | ↓ |

## Hypovolemic Shock

### Classification of Hemorrhage

| Class | Blood Loss | HR | BP | Urine | Mental Status |
|-------|------------|----|----|-------|---------------|
| I | <15% (<750 mL) | <100 | Normal | Normal | Slightly anxious |
| II | 15-30% (750-1500) | 100-120 | Normal | 20-30 mL/hr | Mildly anxious |
| III | 30-40% (1500-2000) | 120-140 | Decreased | 5-15 mL/hr | Anxious, confused |
| IV | >40% (>2000) | >140 | Decreased | Negligible | Confused, lethargic |

### Resuscitation Strategies

**Crystalloid vs Colloid**
- SAFE trial: Albumin equivalent to saline in general ICU
- Crystalloid remains first-line

**Blood Products in Hemorrhage**
- Massive transfusion protocol (MTP)
- Balanced resuscitation: 1:1:1 (RBC:FFP:platelets)
- TXA within 3 hours of injury

**Damage Control Resuscitation**
- Permissive hypotension (SBP 80-90) until surgical control
- Limit crystalloid to prevent dilutional coagulopathy
- Early blood products

## Cardiogenic Shock

### SCAI Classification

| Stage | Description | Lactate | Vasopressors |
|-------|-------------|---------|--------------|
| A | At risk | Normal | None |
| B | Beginning | Normal | None |
| C | Classic | Elevated | Usually needed |
| D | Deteriorating | Worsening | Escalating |
| E | Extremis | Severely elevated | Max support, often CPR |

### Management Principles
1. **Identify etiology**: Echo, cath if ACS
2. **Supportive care**: Avoid hypoxia, maintain perfusion
3. **Revascularization**: PCI for ACS-related shock
4. **Inotropes/Vasopressors**:
   - Norepinephrine preferred over dopamine
   - Dobutamine for low CO states
5. **Mechanical support**: IABP, Impella, ECMO

### Mechanical Circulatory Support

| Device | Mechanism | CO Support |
|--------|-----------|------------|
| IABP | Diastolic augmentation | 0.5 L/min |
| Impella CP | Axial flow pump | 3-4 L/min |
| Impella 5.0/5.5 | Axial flow pump | 5 L/min |
| VA-ECMO | Full cardiopulmonary bypass | 4-6 L/min |

## Distributive Shock: Septic Shock

### Surviving Sepsis Campaign 2021

**Hour-1 Bundle**
1. Measure lactate (remeasure if >2)
2. Obtain blood cultures before antibiotics
3. Administer broad-spectrum antibiotics
4. Begin 30 mL/kg crystalloid for hypotension or lactate ≥4
5. Apply vasopressors if hypotensive after fluids (MAP ≥65)

**Vasopressor Recommendations**
- Norepinephrine first-line
- Vasopressin as second agent (up to 0.03 U/min)
- Epinephrine as alternative
- Consider hydrocortisone if refractory shock

### Anaphylactic Shock
- Epinephrine IM 0.3-0.5 mg (1:1000) immediately
- Repeat every 5-15 minutes
- IV epinephrine for refractory cases
- Fluids for volume support
- Adjuncts: H1/H2 blockers, steroids

## Obstructive Shock

### Massive Pulmonary Embolism
- Anticoagulation
- Thrombolysis for hemodynamic instability
- Surgical embolectomy or catheter-directed therapy

### Cardiac Tamponade
- Pericardiocentesis
- Surgical drainage if loculated

### Tension Pneumothorax
- Needle decompression (2nd ICS, MCL)
- Chest tube placement`,
      keyTerms: [
        { term: 'DO2', definition: 'Oxygen delivery - total oxygen transported to tissues per minute' },
        { term: 'SvO2', definition: 'Mixed venous oxygen saturation - reflects balance between oxygen delivery and consumption' },
        { term: 'SCAI classification', definition: 'Society for Cardiovascular Angiography and Interventions staging for cardiogenic shock' },
        { term: 'massive transfusion protocol', definition: 'Standardized delivery of blood products in fixed ratios for severe hemorrhage' },
        { term: 'damage control resuscitation', definition: 'Strategy using permissive hypotension and early blood products until bleeding is controlled' },
      ],
      clinicalNotes: 'Norepinephrine is preferred over dopamine in septic shock (SOAP II trial). Balanced resuscitation with 1:1:1 ratio improves survival in trauma (PROPPR trial). Mechanical circulatory support escalation should be considered early in cardiogenic shock.',
    },

    4: {
      level: 4,
      summary: 'Advanced shock management integrates hemodynamic monitoring, targeted resuscitation endpoints, vasopressor pharmacology, and mechanical circulatory support while addressing the pathophysiology of specific shock states.',
      explanation: `## Advanced Hemodynamic Assessment

### Fluid Responsiveness

**Static Markers (Poor Predictors)**
- CVP: Does not predict fluid responsiveness
- PCWP: Similarly limited

**Dynamic Markers (Better Predictors)**
| Marker | Cutoff | Limitations |
|--------|--------|-------------|
| PPV | >13% | Requires MV, sinus rhythm |
| SVV | >10-12% | Same as PPV |
| PLR | >10% CO increase | Requires CO monitoring |

**Passive Leg Raise (PLR)**
- Autotransfusion of ~300 mL from legs
- Effect within 30-60 seconds
- Reversible test

### Perfusion Assessment

**Global Markers**
- Lactate: Elevated indicates hypoperfusion
- ScvO2: <70% suggests inadequate DO2
- Venoarterial CO2 gap: >6 mmHg indicates tissue hypoperfusion

**Regional/Microcirculatory**
- Mottling score
- Capillary refill time (>3 seconds abnormal)
- Near-infrared spectroscopy (StO2)

### Echocardiography in Shock

**Rapid Echo Protocol**
1. Global LV function
2. RV size and function
3. Pericardial effusion
4. IVC size and collapsibility
5. Valvular abnormalities

**Findings by Shock Type**
| Type | Echo Findings |
|------|---------------|
| Hypovolemic | Hyperdynamic LV, collapsed IVC |
| Cardiogenic | Poor LV function, dilated LV, MR |
| Distributive | Hyperdynamic, normal-low filling |
| Obstructive PE | RV dilation, D-sign, McConnell's |
| Tamponade | Effusion, RA/RV collapse |

## Vasopressor Pharmacology

### Receptor Activity

| Drug | α1 | β1 | β2 | DA | V1 |
|------|----|----|----|----|-----|
| Norepinephrine | +++ | ++ | 0 | 0 | 0 |
| Epinephrine | +++ | +++ | ++ | 0 | 0 |
| Dopamine | ++ | +++ | + | +++ | 0 |
| Phenylephrine | +++ | 0 | 0 | 0 | 0 |
| Vasopressin | 0 | 0 | 0 | 0 | +++ |
| Dobutamine | + | +++ | ++ | 0 | 0 |

### Clinical Selection

**Norepinephrine (Levophed)**
- First-line for most shock
- Increases SVR with some inotropy
- Starting dose: 0.05-0.1 mcg/kg/min

**Vasopressin**
- Add when norepinephrine >0.25-0.5 mcg/kg/min
- Fixed dose 0.03 U/min (no titration)
- Catecholamine-sparing effect

**Epinephrine**
- Anaphylaxis: First-line
- Cardiogenic shock: Consider for inotropy
- Beta-agonist effects may worsen tachycardia

**Phenylephrine**
- Pure vasoconstrictor
- Use when tachycardia limits other agents
- May decrease cardiac output

### Inotropes

**Dobutamine**
- Primary inotrope for cardiogenic shock
- Dose: 2-20 mcg/kg/min
- May cause hypotension (β2 effect)

**Milrinone**
- PDE3 inhibitor: "Inodilator"
- Renally cleared (caution in AKI)
- Loading dose often avoided in shock

## Special Shock States

### Right Ventricular Failure

**Causes**
- Massive PE
- RV infarction
- Pulmonary hypertension
- ARDS with excessive PEEP

**Management Principles**
1. Optimize preload (cautious fluids)
2. Reduce afterload (pulmonary vasodilators)
3. Augment contractility (inotropes)
4. Maintain sinus rhythm
5. Avoid hypoxia/hypercapnia/acidosis

### Spinal Shock and Neurogenic Shock

**Neurogenic Shock**
- Loss of sympathetic tone from spinal cord injury
- Bradycardia + hypotension
- Warm, well-perfused extremities
- Treatment: Vasopressors (norepi, phenylephrine), fluids

**Spinal Shock**
- Transient loss of all reflexes below injury
- Different from neurogenic shock

### Adrenal Crisis

- Acute adrenal insufficiency
- Refractory hypotension despite fluids/vasopressors
- Treatment: Hydrocortisone 100 mg IV, then 50 mg q6h

## Resuscitation Endpoints

### Traditional Targets
| Parameter | Target |
|-----------|--------|
| MAP | ≥65 mmHg |
| Urine output | >0.5 mL/kg/hr |
| Mental status | Improving |

### Lactate Clearance
- Goal: Normalization or >10% decrease/2h
- Better target than ScvO2 (ANDROMEDA-SHOCK)

### Capillary Refill Time
- ANDROMEDA-SHOCK: CRT-targeted resuscitation non-inferior
- Target: <3 seconds

### Avoiding Fluid Overload
- Limit resuscitation to achieve targets
- Consider de-resuscitation once stable
- Positive fluid balance associated with worse outcomes`,
      keyTerms: [
        { term: 'PLR', definition: 'Passive Leg Raise - bedside test for fluid responsiveness by elevating legs to autotransfuse venous blood' },
        { term: 'venoarterial CO2 gap', definition: 'Difference between venous and arterial CO2; elevated indicates inadequate tissue perfusion' },
        { term: 'McConnell sign', definition: 'RV free wall akinesis with apical sparing on echo; suggests acute pulmonary embolism' },
        { term: 'mottling score', definition: 'Assessment of skin perfusion around the knees; correlates with mortality in shock' },
        { term: 'catecholamine-sparing', definition: 'Effect of vasopressin allowing reduction in norepinephrine dose' },
      ],
      clinicalNotes: 'ANDROMEDA-SHOCK showed lactate clearance and capillary refill time are both valid resuscitation targets. Avoid excessive fluid administration - positive balance worsens outcomes. Consider early mechanical support in cardiogenic shock before irreversible organ damage.',
    },

    5: {
      level: 5,
      summary: 'Expert management of shock integrates current trial evidence, precision hemodynamic monitoring, individualized vasopressor strategies, and timely escalation to mechanical support while addressing ongoing controversies in resuscitation science.',
      explanation: `## Evidence Synthesis in Shock Management

### Landmark Trials

**Septic Shock**
- VASST (2008): Vasopressin + norepi reduced mortality in less severe shock
- VANISH (2016): Vasopressin vs norepi - no mortality difference, less RRT with vasopressin
- ANDROMEDA-SHOCK (2019): CRT-guided resuscitation non-inferior to lactate
- VITAMINS (2020): Vitamin C, thiamine, hydrocortisone - no benefit
- LOVIT (2022): Vitamin C - no benefit, possible harm

**Cardiogenic Shock**
- IABP-SHOCK II (2012): IABP did not reduce mortality
- CULPRIT-SHOCK (2017): Culprit-only PCI superior to immediate complete revascularization
- DanGer Shock (2024): Impella CP showed mortality benefit in AMI-CS

**Vasopressor Trials**
- SOAP II (2010): Dopamine associated with more arrhythmias, higher mortality in cardiogenic shock subgroup
- ATHOS-3 (2017): Angiotensin II effective in vasodilatory shock

### Phenotyping Shock

**Septic Shock Phenotypes**
- Alpha: Minimal organ dysfunction, low mortality
- Beta: Older, chronic comorbidities
- Gamma: Inflammation, respiratory failure
- Delta: Liver dysfunction, sepsis source, high mortality

**Implications**
- Different responses to steroids, fluids, vasopressors
- Future: Precision medicine in shock

## Advanced Vasopressor Strategies

### Angiotensin II (Giapreza)

**ATHOS-3 Trial**
- Vasodilatory shock on high-dose vasopressors
- MAP response: 70% vs 23%
- Mortality signal (secondary outcome)

**Clinical Use**
- Catecholamine-refractory shock
- May be beneficial in high-renin states
- Contraindicated in active clot

### Multi-Vasopressor Strategies

**Rationale**
- Receptor desensitization with high-dose single agents
- Complementary mechanisms

**Typical Escalation**
1. Norepinephrine (first-line)
2. Vasopressin (0.03 U/min)
3. Epinephrine or Angiotensin II
4. Consider phenylephrine if tachycardia

### Corticosteroids in Shock

**Septic Shock**
- APROCCHSS: Hydrocortisone + fludrocortisone reduced mortality
- ADRENAL: Hydrocortisone alone - no mortality benefit, faster shock reversal

**Current Recommendations**
- Hydrocortisone 200 mg/day for refractory shock
- May hasten shock reversal
- Mortality benefit uncertain

## Mechanical Circulatory Support

### Device Selection in Cardiogenic Shock

**Escalation Paradigm**
IABP → Impella CP → Impella 5.0/5.5 → VA-ECMO

**Considerations**
| Device | LV Unloading | RV Support | Oxygenation | Complexity |
|--------|--------------|------------|-------------|------------|
| IABP | + | 0 | 0 | Low |
| Impella | +++ | 0 | 0 | Medium |
| VA-ECMO | +/- (LV distension) | +++ | +++ | High |

### ECMO Considerations

**VV-ECMO (Respiratory)**
- Severe ARDS unresponsive to conventional therapy
- Bridge to recovery or transplant

**VA-ECMO (Cardiac)**
- Cardiogenic shock
- Cardiac arrest (ECPR)
- Bridge to recovery, decision, or transplant

**LV Venting**
- VA-ECMO increases afterload → LV distension
- Strategies: IABP, Impella, atrial septostomy

### Timing of Escalation

**"Door-to-Support" Concept**
- Early MCS before irreversible organ damage
- Biomarkers: Rising lactate, worsening acidosis
- National Cardiogenic Shock Initiative: Protocol-driven approach

## Resuscitation Science Controversies

### Optimal MAP Target

- Standard: ≥65 mmHg
- SEPSISPAM (2014): Higher target (80-85) - no benefit overall
- Chronic hypertension subgroup: May benefit from higher target
- Individualized approach emerging

### Fluid Composition

- Saline vs Balanced Crystalloids
- SMART (2018): Balanced associated with less MAKE (composite)
- BaSICS (2021): No difference in mortality
- Current: Balanced preferred, avoid chloride loading

### Albumin

- SAFE (2004): Equivalent to saline in general ICU
- ALBIOS (2014): No mortality benefit in sepsis
- May reduce fluid volume needed

### Blood Transfusion Threshold

- TRISS (2014): Hgb 7 vs 9 in septic shock - no difference
- Restrictive strategy appropriate in stable shock

## Quality and Systems

### Shock Team Approach

- Multidisciplinary rapid response
- Cardiology, cardiac surgery, critical care, nursing
- Protocol-driven escalation
- Real-time hemodynamic monitoring

### Metrics and Benchmarks

- Time to antibiotic in septic shock
- Time to vasopressor if needed
- Achievement of MAP target
- Lactate remeasurement
- Mortality by shock type

### Goals of Care in Refractory Shock

- Early palliative care involvement
- Shared decision-making
- When to transition to comfort
- MCS as bridge to decision

### Research Frontiers

- AI for shock phenotyping
- Biomarker-guided therapy
- Personalized vasopressor selection
- Optimal MCS timing and selection
- Microcirculation monitoring`,
      keyTerms: [
        { term: 'ECPR', definition: 'Extracorporeal Cardiopulmonary Resuscitation - VA-ECMO initiation during cardiac arrest' },
        { term: 'LV venting', definition: 'Strategies to decompress left ventricle during VA-ECMO to prevent distension' },
        { term: 'shock phenotypes', definition: 'Distinct biological subtypes of shock with different outcomes and treatment responses' },
        { term: 'catecholamine resistance', definition: 'Diminishing response to increasing doses of catecholamine vasopressors' },
        { term: 'door-to-support', definition: 'Time from presentation to mechanical circulatory support initiation in cardiogenic shock' },
      ],
      clinicalNotes: `Expert practice points:
1. DanGer Shock trial showed Impella CP mortality benefit in AMI cardiogenic shock
2. ANDROMEDA-SHOCK validated capillary refill time as resuscitation target
3. Consider angiotensin II for catecholamine-refractory vasodilatory shock
4. Early MCS escalation before irreversible organ damage is key in cardiogenic shock
5. Shock phenotyping may guide future personalized therapy
6. Avoid excessive fluid resuscitation - positive balance worsens outcomes`,
    },
  },

  media: [
    {
      id: 'shock-types-overview',
      type: 'diagram',
      filename: 'shock-types-overview.svg',
      title: 'Four Types of Shock',
      description: 'Visual comparison of hypovolemic, cardiogenic, distributive, and obstructive shock',
    },
    {
      id: 'hemodynamic-profiles-shock',
      type: 'diagram',
      filename: 'hemodynamic-profiles-shock.svg',
      title: 'Hemodynamic Profiles in Shock',
      description: 'CVP, CO, and SVR patterns in different shock types',
    },
  ],

  citations: [
    {
      id: 'surviving-sepsis-2021',
      type: 'article',
      title: 'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
      authors: ['Evans, L.', 'et al.'],
      source: 'Critical Care Medicine',
      url: 'https://doi.org/10.1097/CCM.0000000000005337',
    },
    {
      id: 'soap-ii-trial',
      type: 'article',
      title: 'Comparison of Dopamine and Norepinephrine in the Treatment of Shock',
      authors: ['De Backer, D.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa0907118',
    },
  ],

  crossReferences: [
    { targetId: 'critical-care-sepsis', targetType: 'topic', relationship: 'related', label: 'Sepsis Recognition and Treatment' },
    { targetId: 'critical-care-icu-basics', targetType: 'topic', relationship: 'related', label: 'ICU Basics' },
    { targetId: 'critical-care-cardiac-arrest', targetType: 'topic', relationship: 'related', label: 'Cardiac Arrest and ACLS' },
    { targetId: 'emergency-cardiac-warning-signs', targetType: 'topic', relationship: 'see-also', label: 'Cardiac Emergencies' },
  ],

  tags: {
    systems: ['cardiovascular', 'critical-care'],
    topics: ['shock', 'hemodynamics', 'resuscitation', 'vasopressors'],
    keywords: ['shock', 'hypotension', 'norepinephrine', 'sepsis', 'cardiogenic', 'hypovolemic', 'vasopressors', 'ECMO'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default shockTypesAndManagement;
