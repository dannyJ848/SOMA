/**
 * Shock - Types, Recognition, and Management
 *
 * Comprehensive content on shock including hypovolemic, septic, cardiogenic,
 * anaphylactic, obstructive shock with pathophysiology and treatment.
 */

import { EducationalContent } from '../types';

export const shock: EducationalContent = {
  id: 'emergency-shock',
  type: 'condition',
  name: 'Shock',
  alternateNames: ['Circulatory Shock', 'Hypoperfusion', 'Cardiovascular Collapse'],

  levels: {
    1: {
      level: 1,
      summary: 'Shock is what happens when your body doesn\'t get enough blood flow. It\'s an emergency that needs immediate treatment to prevent organ damage and death.',
      explanation: `## What Is Shock?

Shock is a life-threatening condition where your body isn't getting enough blood flow. Without enough blood, your organs can't get the oxygen they need to work properly.

**Think of your circulatory system like a delivery truck:**
- Your heart is the truck's engine
- Your blood is the cargo (oxygen and nutrients)
- Your blood vessels are the roads

If any part of this system fails, organs don't get their deliveries!

## Types of Shock

There are different kinds of shock, depending on what's causing the problem:

### 1. Hypovolemic Shock (Not Enough Blood)

**Causes:**
- Severe bleeding (cuts, internal bleeding)
- Severe burns
- Severe dehydration
- Extreme vomiting or diarrhea

**What happens:**
- You don't have enough blood volume
- The "delivery truck" is empty

### 2. Cardiogenic Shock (Heart Pump Failure)

**Causes:**
- Heart attack
- Heart failure
- Severe heart rhythm problems

**What happens:**
- The "engine" (heart) is too weak to pump
- Blood isn't moving through the body

### 3. Septic Shock (Severe Infection)

**Causes:**
- Serious infection spreading through blood
- Usually from bacteria

**What happens:**
- Blood vessels get too wide
- Blood pools where it shouldn't
- Organs don't get enough blood

### 4. Anaphylactic Shock (Severe Allergic Reaction)

**Causes:**
- Severe allergies to food, insect stings, medications

**What happens:**
- Massive allergic reaction
- Blood vessels suddenly widen
- Airway may swell shut

### 5. Obstructive Shock (Something Blocking Blood Flow)

**Causes:**
- Blood clot in lungs (pulmonary embolism)
- Fluid around heart (cardiac tamponade)
- Tension pneumothorax (collapsed lung)

**What happens:**
- Something is blocking blood from flowing
- Like a roadblock on the delivery route

## Signs of Shock

**Early signs (get help immediately!):**
- Cool, clammy, pale skin
- Sweating for no reason
- Fast heartbeat
- Fast breathing
- Feeling very anxious or restless
- Confusion or strange behavior

**Late signs (danger!):**
- Blue or gray skin color
- Very low blood pressure
- Losing consciousness
- Not making urine (kidneys shutting down)

## What To Do

**If you suspect someone is in shock:**

1. **Call 911 immediately!**

2. **Help them lie down:**
   - Flat on their back
   - Raise their feet about 12 inches (unless head/neck/back injury)

3. **Keep them warm:**
   - Cover with blankets
   - Don't apply direct heat

4. **Don't give them anything to eat or drink**

5. **Stay with them and talk to them**
   - Reassure them help is coming
   - Keep them calm

**For anaphylactic shock:**
- If they have an EpiPen, help them use it
- Remove the cause (stinger, food, etc.)

## Prevention

Some causes of shock can be prevented:

- Treat infections early (don't wait!)
- Know your allergies and carry medication
- Wear seatbelts to prevent severe injury
- Follow safety rules to avoid severe bleeding
- Stay hydrated in hot weather

## Remember

**Shock is a medical emergency!** Every minute without treatment increases the risk of permanent organ damage or death.

If you see signs of shock, call for help immediately. Don't wait to see if it gets better - it usually gets worse without treatment!`,
      keyTerms: [
        { term: 'shock', definition: 'When the body doesn\'t get enough blood flow to organs and tissues' },
        { term: 'hypovolemic shock', definition: 'Shock caused by not having enough blood or fluid in the body' },
        { term: 'septic shock', definition: 'Shock caused by a severe infection that spreads through the blood' },
        { term: 'cardiogenic shock', definition: 'Shock caused by the heart being too weak to pump blood properly' },
        { term: 'anaphylactic shock', definition: 'A severe, life-threatening allergic reaction that can cause breathing problems and low blood pressure' },
      ],
      analogies: [
        'Your body is like a house with plumbing. Shock is like the water pressure dropping - nothing gets water where it\'s needed.',
        'Blood vessels in shock are like roads with traffic jams - the trucks (blood) can\'t get through to make their deliveries.',
        'The heart in cardiogenic shock is like a tired runner - it\'s working hard but just can\'t keep up.',
      ],
      examples: [
        'A person loses a lot of blood from a deep cut. Their skin gets pale and cold, and they feel faint. This is hypovolemic shock from blood loss.',
        'Someone eats a peanut they\'re allergic to. Their face swells, they can\'t breathe, and their blood pressure drops. This is anaphylactic shock.',
        'An elderly person has a severe heart attack. Their heart becomes too weak to pump effectively, and their organs don\'t get enough blood. This is cardiogenic shock.',
      ],
      patientCounselingPoints: [
        'If you have severe allergies, always carry your EpiPen and know how to use it',
        'Seek medical care early for infections - don\'t wait for them to get worse',
        'Wear seatbelts and protective gear to prevent injuries that can cause shock',
        'If someone shows signs of shock, call 911 immediately - every minute counts',
      ],
    },

    2: {
      level: 2,
      summary: 'Shock is a state of inadequate tissue perfusion. Understanding the different types (hypovolemic, cardiogenic, distributive, obstructive) is essential for rapid recognition and appropriate management.',
      explanation: `## What Is Shock?

Shock is defined as inadequate tissue perfusion, meaning organs and tissues aren't receiving enough oxygenated blood to function properly. Without adequate oxygen, cells switch to anaerobic metabolism, leading to lactic acid buildup and eventual cell death.

**Cellular consequences of shock:**
- Anaerobic metabolism produces lactic acid
- Cell membrane pumps fail
- Cells swell and die
- Organ failure follows
- Eventually leads to death if untreated

## Classification of Shock

Shock can be classified into four main categories based on the underlying problem:

### 1. Hypovolemic Shock

**Definition:** Inadequate circulating blood volume

**Causes:**
- **Hemorrhage:** Trauma, GI bleeding, ruptured ectopic pregnancy
- **Fluid loss:** Burns, vomiting, diarrhea, excessive sweating

**Clinical features:**
- Decreased preload (less fluid returning to heart)
- Decreased stroke volume
- Increased heart rate (compensatory)
- Cool, clammy skin (vasoconstriction)

### 2. Cardiogenic Shock

**Definition:** Heart pump failure

**Causes:**
- Myocardial infarction (heart attack)
- Severe heart failure
- Cardiomyopathy
- Arrhythmias
- Valve problems

**Clinical features:**
- Backup of fluid behind the failing heart
- Pulmonary edema (fluid in lungs)
- JVD (jugular venous distension)
- Cool extremities

### 3. Distributive Shock

**Definition:** Abnormal distribution of blood flow

**Subtypes:**

**Septic shock:**
- Systemic response to infection
- Vasodilation (blood vessels get too wide)
- Capillary leak (fluid leaves blood vessels)
- Most common cause of death in ICU

**Anaphylactic shock:**
- Severe allergic reaction
- Massive vasodilation
- Increased capillary permeability
- Airway edema

**Neurogenic shock:**
- Spinal cord injury
- Loss of sympathetic tone
- Vasodilation without compensatory tachycardia
- Warm (not cool!) skin

**Clinical features of distributive shock:**
- Wide pulse pressure
- Warm skin early (except early septic shock)
- Normal or high cardiac output (initially)

### 4. Obstructive Shock

**Definition:** Physical obstruction to blood flow

**Causes:**
- Pulmonary embolism (blood clot in lungs)
- Cardiac tamponade (fluid around heart)
- Tension pneumothorax (air pressure in chest)
- Superior vena cava syndrome

**Clinical features:**
- Normal heart contractility
- Blockage prevents filling or output
- Distended neck veins
- Muffled heart sounds (tamponade)

## Clinical Presentation of Shock

**Early signs (compensated shock):**
- Anxiety, restlessness
- Cool, clammy skin (except neurogenic)
- Tachycardia (fast heart rate)
- Tachypnea (fast breathing)
- Normal or slightly low blood pressure

**Late signs (decompensated shock):**
- Altered mental status
- Low blood pressure
- Oliguria (low urine output)
- Metabolic acidosis (high lactate)
- Organ failure

**Organ-specific manifestations:**

| Organ | Signs of Hypoperfusion |
|-------|------------------------|
| Brain | Confusion, agitation, coma |
| Heart | Chest pain, arrhythmias |
| Lungs | Tachypnea, respiratory failure |
| Kidneys | Decreased urine output |
| Skin | Cool, pale, cyanotic, mottled |
| Gut | Ileus, abdominal pain |

## Diagnostic Approach

**Vital signs:**
- Blood pressure: Low or falling
- Heart rate: Elevated (except neurogenic)
- Respiratory rate: Elevated
- Temperature: May be low (hypovolemic) or high (septic)
- Oxygen saturation: May be low

**Laboratory tests:**
- **Lactate:** Marker of anaerobic metabolism
- **CBC:** Check for anemia, infection
- **BMP:** Kidney function, electrolytes
- **Blood gas:** Acid-base status
- **Coagulation studies:** DIC evaluation

**Imaging:**
- Chest X-ray: Heart size, pulmonary edema
- Echocardiogram: Heart function, tamponade
- CT scan: Looking for source of infection or bleeding

## Initial Management Principles

**Regardless of cause:**
1. **ABCs:** Airway, Breathing, Circulation
2. **Oxygen:** Give supplemental oxygen
3. **IV access:** Two large-bore IVs
4. **Fluids:** Crystalloid bolus (careful in cardiogenic)
5. **Monitor:** Continuous cardiac monitoring

**Specific treatments:**

| Shock Type | Primary Treatment |
|------------|-------------------|
| Hypovolemic | Replace lost volume (blood, fluids) |
| Cardiogenic | Support heart, inotropes, treat cause |
| Septic | Antibiotics, fluids, vasopressors |
| Anaphylactic | Epinephrine, antihistamines, steroids |
| Obstructive | Remove obstruction (drain, clot-bust) |

**Vasopressors and inotropes:**
- **Norepinephrine:** First-line for most shock types
- **Dopamine:** Alternative to norepinephrine
- **Dobutamine:** Increases cardiac output (cardiogenic)
- **Epinephrine:** Anaphylaxis, septic shock
- **Vasopressin:** Septic shock, neurogenic

## Prognosis

**Mortality by shock type:**
- Hypovolemic: 10-40% (depends on cause)
- Cardiogenic: 50-80%
- Septic: 20-50% (decreases with early treatment)
- Anaphylactic: <1% with prompt treatment
- Obstructive: Variable (depends on cause and speed of treatment)

**Keys to survival:**
- Early recognition
- Rapid treatment of underlying cause
- Supportive care of failing organs
- Prevention of complications`,
      keyTerms: [
        { term: 'hypovolemic shock', definition: 'Shock caused by decreased blood volume from hemorrhage, dehydration, or fluid loss' },
        { term: 'cardiogenic shock', definition: 'Shock caused by inadequate heart pumping due to heart attack, heart failure, or arrhythmias' },
        { term: 'septic shock', definition: 'Shock caused by severe infection with systemic inflammation and vasodilation' },
        { term: 'anaphylactic shock', definition: 'Severe allergic reaction causing vasodilation, increased vascular permeability, and airway edema' },
        { term: 'neurogenic shock', definition: 'Shock from spinal cord injury causing loss of sympathetic tone and vasodilation' },
        { term: 'lactate', definition: 'Blood marker that increases when cells are not getting enough oxygen and switch to anaerobic metabolism' },
      ],
      analogies: [
        'The cardiovascular system is like a garden fountain - the heart is the pump, blood vessels are the pipes, and blood is the water. If any part fails, the whole system stops working.',
        'Lactate is like the exhaust from a car running in a closed garage - it builds up when the engine (cells) isn\'t getting enough oxygen.',
        'Distributive shock is like a city widening all its roads at once - the traffic (blood) spreads out and doesn\'t reach its destination.',
      ],
      examples: [
        'A 30-year-old man is stabbed in the abdomen. He loses 2 liters of blood. His blood pressure drops to 80/50, heart rate rises to 130. This is hypovolemic shock requiring blood transfusion.',
        'A 65-year-old woman develops pneumonia. She becomes confused, her blood pressure is 75/40, and her lactate is 5 mmol/L. This is septic shock requiring antibiotics and fluids.',
        'A 20-year-old man eats shrimp and develops lip swelling, difficulty breathing, and wheezing. His blood pressure is 70/40. This is anaphylactic shock requiring epinephrine.',
      ],
      patientCounselingPoints: [
        'Know the signs of shock - cool clammy skin, fast heartbeat, confusion are warning signs',
        'If you have severe allergies, carry an EpiPen and know when and how to use it',
        'Seek medical care early for infections - sepsis can develop quickly and become life-threatening',
        'Take all prescribed medications for heart conditions to prevent heart failure',
      ],
    },

    3: {
      level: 3,
      summary: 'Shock is a life-threatening state of tissue hypoperfusion. Management requires rapid identification of shock type, targeted therapy based on pathophysiology, and ongoing reassessment.',
      explanation: `## Shock Pathophysiology

**Cellular metabolism in shock:**
- Normal: Aerobic metabolism, 36 ATP/glucose molecule
- Shock: Anaerobic metabolism, 2 ATP/glucose molecule
- Consequence: Energy crisis, sodium-potassium pump failure, cell death
- Lactate production: Byproduct of anaerobic metabolism

**The shock continuum:**
1. **Compensated shock:** Normal BP, tachycardia, increased SVR
2. **Decompensated shock:** Low BP, organ hypoperfusion evident
3. **Irreversible shock:** Multi-organ failure, cell death

**Compensatory mechanisms:**
- Sympathetic activation: Tachycardia, vasoconstriction
- RAAS activation: Fluid retention, vasoconstriction
- ADH release: Water retention, vasoconstriction
- Catecholamine surge: Increased contractility

## Classification and Pathophysiology

### Hypovolemic Shock

**Etiology:**
- Hemorrhagic: Trauma, GI bleed, ruptured ectopic, AAA rupture
- Non-hemorrhagic: Burns, vomiting, diarrhea, third-spacing

**Classification by blood loss:**

| Class | Blood Loss | BP | Pulse | Mental Status |
|-------|------------|-----|-------|---------------|
| I | <15% (<750 mL) | Normal | <100 | Normal |
| II | 15-30% (750-1500 mL) | Normal | 100-120 | Anxious |
| III | 30-40% (1500-2000 mL) | Decreased | 120-160 | Confused |
| IV | >40% (>2000 mL) | Very low | >140 | Lethargic/coma |

**Pathophysiology:**
- Decreased preload → decreased stroke volume
- Compensatory tachycardia initially
- Increased SVR (vasoconstriction)
- Eventually decompensation with bradycardia and hypotension

### Cardiogenic Shock

**Etiology:**
- Systolic dysfunction: MI, cardiomyopathy
- Diastolic dysfunction: Restrictive cardiomyopathy, tamponade
- Arrhythmias: VT, AFib with RVR, complete heart block
- Structural: VSD, papillary muscle rupture post-MI

**Pathophysiology:**
- Decreased cardiac output → hypotension
- Compensatory vasoconstriction (increased afterload)
- Increased pulmonary capillary pressure → pulmonary edema
- Decreased coronary perfusion → worsened myocardial function

**Definition (classic):** SBP <90 mmHg for >30 min, CI <2.2 L/min/m², PCWP >15 mmHg

**Sepsis-related cardiomyopathy:** Up to 50% of septic patients have reversible LV dysfunction

### Septic Shock

**Sepsis definitions:**
- **Infection:** Microbial invasion of normally sterile tissue
- **Sepsis:** Infection + organ dysfunction (SOFA score ↑2)
- **Septic shock:** Sepsis requiring vasopressors to maintain MAP ≥65 AND lactate >2 mmol/L despite fluid resuscitation

**Pathophysiology:**

**Stage 1 (Hyperdynamic):**
- Vasodilation (NO, prostaglandins)
- Increased cardiac output
- Warm shock

**Stage 2 (Hypodynamic):**
- Myocardial depression
- Microvascular thrombosis
- Cold shock

**Mediator storm:**
- TNF-alpha, IL-1, IL-6
- Complement activation
- Coagulopathy (DIC)
- Endothelial injury

### Anaphylactic Shock

**Immunologic mechanism:**
- IgE-mediated (most common): Prior sensitization, mast cell/basophil degranulation
- Non-IgE-mediated: Direct mast cell activation

**Pathophysiology:**
- Histamine release: Vasodilation, increased permeability, bronchoconstriction
- Leukotrienes/prostaglandins: Bronchospasm, inflammation
- Massive intravascular volume shift

**Diagnostic criteria (NIAID/FAAN):**
Acute onset with involvement of skin/mucosa PLUS ONE of:
1. Respiratory compromise
2. Reduced BP or associated symptoms

**Biphasic reactions:** Second wave of symptoms in 1-72 hours (up to 20% of cases)

### Obstructive Shock

**Pulmonary embolism:**
- Mechanical obstruction of pulmonary vasculature
- Increased right ventricular afterload
- RV failure → decreased LV preload → decreased cardiac output
- Massive PE: Systolic BP <90 or drop >40 mmHg

**Cardiac tamponade:**
- Pericardial fluid accumulation
- Equalization of diastolic pressures
- **Beck triad:** Hypotension, JVD, muffled heart sounds
- **Pulsus paradoxus:** Inspiratory drop in SBP >10 mmHg

**Tension pneumothorax:**
- One-way valve in pleural space
- Ipsilateral lung collapse
- Mediastinal shift away from affected side
- Impairs venous return → obstructive shock

**Superior vena cava syndrome:**
- External compression or thrombosis
- Facial/upper extremity edema
- May cause obstruction if severe

## Clinical Assessment

**Vital signs interpretation:**

| Shock Type | Temperature | Heart Rate | Respirations | Skin |
|------------|-------------|------------|--------------|------|
| Hypovolemic | Low | High | High | Cool, clammy |
| Cardiogenic | Low/normal | High | High | Cool, diaphoretic |
| Septic | High | High | High | Warm (early), cool (late) |
| Anaphylactic | Normal | High | High | Warm, flushed, urticaria |
| Neurogenic | Normal | Normal/low | Normal | Warm, dry |

**Physical examination clues:**

**Jugular venous pressure:**
- Low: Hypovolemia
- Elevated: Cardiogenic, obstructive

**Heart sounds:**
- Muffled: Tamponade, pneumothorax
- Extra sounds: Murmurs (valve disease), rubs (pericarditis)

**Lung sounds:**
- Crackles: Cardiogenic shock, ARDS
- Diminished: Pneumothorax, PE

**Abdominal exam:**
- Distended, rigid: Sepsis (perforation)
- Pulsatile mass: AAA (ruptured)

**Skin:**
- Cool/clammy: Poor perfusion
- Mottled: Severe shock
- Urticaria: Anaphylaxis
**Petechiae/purpura:** Meningococcemia, DIC

**Pulse pressure:**
- Narrow (<25): Hypovolemic, cardiogenic
- Wide: Septic, anaphylactic, PDA

## Diagnostic Testing

**Lactate:**
- Normal: <2 mmol/L
- Intermediate: 2-4 mmol/L
- Severe: >4 mmol/L
- Trend is more important than absolute value

**Central venous oxygen saturation (ScvO2):**
- Normal: 70-80%
- <60%: Inadequate cardiac output
- >80%: Impaired oxygen extraction (cytopathic hypoxia)

**Echocardiography (POCUS):**
- LV function: Cardiogenic vs distributive
- RV size/function: PE, tamponade
- IVC collapsibility: Volume status

**Other diagnostics:**
- ECG: Ischemia, arrhythmia, PE signs
- CXR: Pulmonary edema, pneumothorax
- CT angiography: PE source
- Ultrasound: AAA, free fluid (FAST)

## Treatment Algorithms

### Initial Resuscitation (All Types)

1. **Airway & breathing:** Supplemental O2, consider mechanical ventilation
2. **IV access:** Two large-bore (16-18 gauge)
3. **Fluid challenge:** 500-1000 mL crystalloid bolus
4. **Vasopressors:** If hypotension persists after fluids
5. **Treat underlying cause**

### Type-Specific Therapy

**Hypovolemic:**
- 1:1:1 blood products (massive transfusion)
- Crystalloids for non-hemorrhagic shock
- Control bleeding source

**Cardiogenic:**
- Dobutamine: Inotropic support
- Norepinephrine: Vasopressor support
- Consider mechanical circulatory support (IABP, Impella, ECMO)
- Revascularization if ischemic

**Septic:**
- **Antibiotics within 1 hour!**
- 30 mL/kg crystalloid bolus
- Norepinephrine first-line
- Vasopressin second-line
- Source control (drain abscess, remove infected line)

**Anaphylactic:**
- **IM epinephrine** (0.3-0.5 mg of 1:1000) - DO NOT DELAY!
- Antihistamines: H1 and H2 blockers
- Steroids: Methylprednisolone 125 mg
- Bronchodilators if wheezing

**Obstructive:**
- **PE:** Thrombolytics or embolectomy for massive
- **Tamponade:** Pericardiocentesis
- **Tension pneumothorax:** Needle decompression
- **SVC syndrome:** Stenting, radiation (if malignant)

## Monitoring and Endpoints

**Resuscitation goals:**
- MAP ≥65 mmHg
- Urine output ≥0.5 mL/kg/h
- ScvO2 ≥70%
- Lactate clearance (>10% per hour)
- Normalization of mental status

**Advanced monitoring (selective use):**
- Arterial line: Continuous BP
- Central line: CVP, ScvO2, vasopressors
- Pulmonary artery catheter: PVR, cardiac output
- Transpulmonary thermodilution:preload, extravascular lung water`,
      keyTerms: [
        { term: 'SOFA score', definition: 'Sequential Organ Failure Assessment; scoring system to quantify organ dysfunction in sepsis. Increase of ≥2 indicates sepsis.' },
        { term: 'pulsus paradoxus', definition: 'Abnormal drop in systolic BP >10 mmHg during inspiration; classic finding in cardiac tamponade' },
        { term: 'ScvO2', definition: 'Central venous oxygen saturation; measures oxygen remaining in blood returning to heart. <60% suggests inadequate cardiac output' },
        { term: 'vasopressors', definition: 'Medications that cause vasoconstriction to increase blood pressure (norepinephrine, vasopressin, dopamine)' },
        { term: 'inotropes', definition: 'Medications that increase cardiac contractility (dobutamine, milrinone)' },
        { term: 'biphasic anaphylaxis', definition: 'Recurrence of anaphylaxis symptoms 1-72 hours after initial episode without re-exposure to allergen' },
      ],
      analogies: [
        'ScvO2 is like checking what\'s left in the delivery truck after the route - if it\'s full (high), the stores (tissues) aren\'t taking delivery. If it\'s empty (low), the truck is working overtime.',
        'Pulsus paradoxus is like a traffic jam at rush hour - when more cars (blood) try to come into the city (heart) during inspiration (rush hour), nothing moves.',
        'The SOFA score is like a report card for each organ system - it tells you which organs are failing and how badly.',
      ],
      examples: [
        'Sepsis: 65-year-old with urosepsis, BP 75/45, lactate 4.5. IV ceftriaxone given within 45 min. 30 mL/kg LR bolus given. Norepinephrine started. Lactate decreases to 2.1 at 6 hours.',
        'Anaphylaxis: 25-year-old after peanut exposure. Wheezing, hypotension 70/40, generalized urticaria. Epinephrine 0.3 mg IM given to thigh. Symptoms resolve within 5 minutes. Observed for 4 hours.',
        'Cardiogenic shock: 70-year-old with STEMI, BP 82/60, crackles to apices, JVD 12 cm. Cardiac cath shows 100% LAD occlusion. Primary PCI improves BP. Dobutamine started for low cardiac output.',
      ],
      patientCounselingPoints: [
        'Sepsis is a medical emergency - seek immediate care for signs of infection with confusion, low blood pressure, or rapid breathing',
        'If prescribed an EpiPen for allergies, keep it with you at all times and ensure family members know how to use it',
        'After surviving shock, you may need cardiac testing, imaging, or specialist follow-up to address the underlying cause',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced shock management requires understanding of tissue oxygen delivery, hemodynamic monitoring, vasopressor pharmacology, and targeted therapies based on underlying etiology.',
      explanation: `## Advanced Shock Physiology

**Tissue oxygen delivery (DO2):**

\`\`\`
DO2 = CO × CaO2

Where:
CO = Cardiac Output
CaO2 = Arterial oxygen content = (Hb × 1.34 × SaO2) + (0.003 × PaO2)
\`\`\`

**Clinical implications:**
- Increase DO2 by: Increasing CO or increasing Hb (transfusion)
- Goal: DO2 >600 mL/min/m² (or ScvO2 >70%)

**Tissue oxygen consumption (VO2):**

\`\`\`
VO2 = CO × (CaO2 - CvO2)

Where CvO2 = Venous oxygen content
\`\`\`

**Oxygen extraction ratio (O2ER):**

\`\`\`
O2ER = VO2 / DO2 = (SaO2 - SvO2) / SaO2

Normal: 20-30%
Shock: >50% (tissues extracting more oxygen)
\`\`\`

**Pathophysiological states:**

| State | DO2 | VO2 | O2ER | SvO2 | ScvO2 |
|-------|-----|-----|------|------|-------|
| Normal | Normal | Normal | 25% | 75% | 70-80% |
| Early shock | Maintained | Maintained | ↑ | ↓ | ↓ |
| Decompensated shock | ↓ | Maintained (then ↓) | ↑↑ | ↓↓ | ↓↓ |
| Cytopathic hypoxia (sepsis) | Normal/↑ | ↓ | Normal | High | High |

## Hemodynamic Monitoring

**Basic monitoring:**
- Mental status (cerebral perfusion)
- Urine output (renal perfusion)
- Skin perfusion (capillary refill, mottling)
- Lactate (global tissue hypoxia)

**Advanced monitoring:**

**Arterial line:**
- Continuous blood pressure
- Arterial blood gas sampling
- Pulse pressure variation (PPV) for fluid responsiveness

**Central venous catheter:**
- CVP (limited value for fluid status)
- ScvO2 (balance of DO2 and VO2)
- Central access for vasopressors

**Pulmonary artery catheter (PAC):**
- Cardiac output (thermodilution)
- PA pressure, PCWP (left-sided filling pressure)
- SvO2 (mixed venous - more accurate than ScvO2)
- SVR, PVR

**Echocardiography (POCUS/TTE):**

**LV assessment:**
- Hyperdynamic: Empty, contracting vigorously (hypovolemia, distributive)
- Hypokinetic: Poor contractility (cardiogenic)
- Septic cardiomyopathy: Global hypokinesis

**RV assessment:**
- Size: Dilation (PE, pulmonary hypertension)
- Function: Hypokinesis (PE, RV infarct)
- Septal position: Flattened or D-shaped (RV pressure overload)

**IVC assessment:**
- Collapsibility: >50% suggests volume responsive
- Diameter: <2.1 cm suggests volume depletion

**Fluid responsiveness assessment:**

| Test | Positive (fluid responsive) | Negative |
|------|----------------------------|----------|
| Passive leg raise | CO increases >10% | No change |
| Pulse pressure variation | >13% | <13% |
| Stroke volume variation | >10% | <10% |
| IVC collapsibility | >50% | <50% |

## Vasopressor Pharmacology

**Norepinephrine:**
- **Mechanism:** Potent α1, weak β1
- **Dose:** 0.01-3 mcg/kg/min
- **Effect:** Increases MAP, maintains CO
- **First-line** for most shock types
- Minimal tachycardia compared to dopamine

**Dopamine:**
- **Mechanism:** Dose-dependent (renal at low, β at moderate, α at high)
- **Dose:** 2-20 mcg/kg/min
- **Limitations:** Arrhythmias, worse outcomes vs norepinephrine (SOAP II trial)
- **Alternative** when norepinephrine not available

**Vasopressin:**
- **Mechanism:** V1 receptor direct vasoconstriction
- **Dose:** 0.03 U/min (fixed)
- **Indication:** Catecholamine-resistant shock
- **Mechanism:** Restores V1 receptor sensitivity (downregulated in septic shock)
- **Sepsis:** Vasopressin + norepinephrine vs norepinephrine alone (VASST trial)

**Phenylephrine:**
- **Mechanism:** Pure α1 agonist
- **Dose:** 0.5-8 mcg/kg/min
- **Effect:** Increases MAP, decreases CO
- **Indication:** Tachyarrhythmias, low CO with high SVR
- **Contraindication:** Cardiogenic shock

**Epinephrine:**
- **Mechanism:** α and β agonist
- **Dose:** 0.01-0.5 mcg/kg/min
- **Indication:** Septic shock refractory to norepinephrine + vasopressin, anaphylaxis
- **Effects:** Tachycardia, lactic acidosis (increases production), splanchnic ischemia
- **Not first-line** for septic shock

**Dobutamine:**
- **Mechanism:** β1 > β2 > α1 (inodilator)
- **Dose:** 2.5-20 mcg/kg/min
- **Indication:** Cardiogenic shock with low CO
- **Effect:** Increases CO, decreases SVR
- **Limitation:** May cause hypotension

**Milrinone:**
- **Mechanism:** PDE3 inhibitor (increases cAMP)
- **Dose:** 0.375-0.75 mcg/kg/min
- **Indication:** Cardiogenic shock, pulmonary hypertension
- **Advantages:** Not β-dependent, longer half-life than dobutamine
- **Disadvantages:** Longer duration if causing hypotension

## Septic Shock Updates

**Surviving Sepsis Campaign (2021 updates):**

**Initial resuscitation:**
- 30 mL/kg crystalloid bolus within first 3 hours
- Target MAP 65 mmHg (not higher unless chronic HTN)
- Norepinephrine first-line vasopressor
- Vasopressin second-line (up to 0.03 U/min)
- **Add inotrope** if low cardiac output despite adequate volume

**Antibiotics:**
- Administer within 1 hour of recognition
- Broad spectrum then de-escalate
- Consider source before choosing empiric regimen

**Corticosteroids:**
- **Hydrocortisone 200 mg/day** for refractory shock (requiring vasopressors)
- Consider for adrenal insufficiency
- Not recommended for non-refractory shock

**Vitamin C controversy:**
- Marik protocol (HAT therapy): Hydrocortisone, ascorbic acid, thiamine
- Conflicting evidence, not guideline-endorsed
- Reasonable to consider in refractory shock

**Fluid management after initial resuscitation:**
- Conservative strategy once resuscitated
- Balanced crystalloids (LR, Plasma-Lyte) preferred over normal saline
- Stopping fluids when ScvO2 >70% and lactate clearing

## Cardiogenic Shock Management

**Revascularization:**
- **STEMI:** Emergent PCI (door-to-balloon <90 min)
- **Culprit lesion-only PCI** vs complete revascularization (CULPRIT-SHOCK trial)
- **CABG** for mechanical complications

**Mechanical circulatory support:**

**IABP (Intra-aortic balloon pump):**
- Inflation during diastole (augments coronary flow)
- Deflation during systole (reduces afterload)
- IABP-SHOCK II: No mortality benefit
- Still reasonable for mechanical complications

**Impella:**
- Axial flow pump in LV
- Increases cardiac output 2.5-5 L/min
- Better than IABP for severe shock
- Complications: Hemolysis, limb ischemia

**VA-ECMO:**
- Complete cardiopulmonary support
- Indication: Refractory cardiogenic shock
- Complications: Bleeding, limb ischemia, Harlequin syndrome

## Obstructive Shock Details

**Pulmonary embolism:**
- **High-risk (massive):** Sustained hypotension, bradycardia/cardiac arrest
- **Treatment:** Systemic thrombolysis (alteplase 100 mg over 2 h) OR catheter-directed therapy OR surgical embolectomy
- **Contraindications:** Active bleeding, recent surgery, bleeding diathesis

**Cardiac tamponade:**
- **Diagnosis:** Beck triad, pulsus paradoxus, electrical alternans
- **Ultrasound:** Pericardial effusion, RA/RV diastolic collapse
- **Treatment:** Pericardiocentesis (subxiphoid, 16-18 gauge needle) or surgical drainage

**Tension pneumothorax:**
- **Immediate:** Needle decompression (2nd ICS midclavicular, 14-gauge needle)
- **Definitive:** Chest tube (4th-5th ICS anterior axillary line, 32-36 Fr)

## Refractory Shock

**Definition:** Shock persisting despite high-dose vasopressors (norepinephrine >1 mcg/kg/min)

**Approach:**
1. **Reevaluate diagnosis:** Is it truly the shock type you think?
2. **Volume status:** Is more fluid needed or fluid overloaded?
3. **Adrenal insufficiency:** Consider cortisol level, give hydrocortisone
4. **Thyroid:** Consider T4 in non-thyroidal illness
5. **Mechanical support:** ECMO, Impella, IABP
6. **Refractory sepsis:** Consider alternative diagnoses (vasoplegic syndrome, adrenal insufficiency,cryptic shock)`,
      keyTerms: [
        { term: 'DO2', definition: 'Oxygen delivery; product of cardiac output and arterial oxygen content. Target >600 mL/min/m²' },
        { term: 'VO2', definition: 'Oxygen consumption; product of cardiac output and arterial-venous oxygen difference. Reflects tissue oxygen use' },
        { term: 'O2ER', definition: 'Oxygen extraction ratio; proportion of delivered oxygen that is consumed by tissues. Increases in shock as extraction compensates' },
        { term: 'pulse pressure variation', definition: 'Respiratory variation in pulse pressure (>13%) predicts fluid responsiveness in mechanically ventilated patients' },
        { term: 'Harlequin syndrome', definition: 'During VA-ECMO, poorly oxygenated blood from native LV enters coronary circulation while lower body gets oxygenated ECMO blood' },
        { term: 'vasoplegic syndrome', definition: 'Severe vasodilation despite high-dose vasopressors, often post-cardiopulmonary bypass or in late sepsis' },
      ],
      analogies: [
        'DO2 is the supply, VO2 is the demand. When supply can\'t meet demand, tissues suffer. Oxygen extraction ratio is how much of the delivery is actually used.',
        'Vasoplegic syndrome is like trying to fill a bucket with holes - no matter how much water (vasopressors) you pour, it won\'t fill.',
        'Harlequin syndrome during ECMO is like having two different circulations - the upper body gets unoxygenated blood from the failing heart while the lower body gets oxygenated ECMO blood.',
      ],
      examples: [
        'Refractory septic shock: On norepinephrine 1.5 mcg/kg/min, MAP 58, ScvO2 68, lactate 4.2. Hydrocortisone 50 mg IV q6h started. Vasopressin added at 0.03 U/min. MAP improves to 68.',
        'Cardiogenic shock: Post-MI with cardiogenic shock, pulmonary edema, on norepinephrine 0.3 mcg/kg/min, MAP 62. Dobutamine started for low cardiac output on echo. Improves MAP to 70, CI to 2.8.',
        'Massive PE: Patient with hypotension 75/45, tachycardia 138, CT shows saddle PE. Alteplase 100 mg given over 2 hours. BP improves to 110/70. Heparin drip started.',
      ],
      patientCounselingPoints: [
        'After surviving septic shock, you may need long-term follow-up. "Post-sepsis syndrome" can include weakness, cognitive issues, and mood changes.',
        'Cardiogenic shock survivors often need multiple medications and close cardiology follow-up to prevent recurrence.',
        'Anaphylaxis survivors should see an allergist for testing and carry epinephrine auto-injectors.',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert-level shock management integrates pathophysiology, advanced monitoring, tailored pharmacotherapy, and evidence-based interventions while addressing complications and end-of-life considerations.',
      explanation: `## State of the Art in Shock Management

**Evolution of shock paradigms:**

**Historical progression:**
1. **Pressors to BP:** MAP targets >65 mmHg
2. **Supranormal oxygen delivery:** Goals of DO2 >600 (disproven)
3. **Early goal-directed therapy:** Protocolized sepsis care (controversial)
4. **Individualized endpoints:** Patient-specific goals
5. **Precision medicine:** Biomarker-guided therapy (emerging)

**Current best practices:**
- Early recognition and source control
- Balanced fluid resuscitation
- First-line norepinephrine for most shock
- Early antibiotics in sepsis (<1 hour)
- Restrictive transfusion (Hb <7 g/dL) in most patients
- Dynamic assessment of fluid responsiveness

## Advanced Septic Shock Management

**Endotoxin activity:**
- LPS (lipopolysaccharide) triggers inflammatory cascade
- Polymyxin B hemoperfusion: Removes endotoxin (mixed evidence)
- EUPHRATES trial: No mortality benefit overall

**Cytokine removal:**
- CytoSorb: Adsorbs cytokines (IL-6, TNF, etc.)
- Limited evidence, case reports
- Consider in refractory hyperinflammatory states

**Vitamin C, thiamine, hydrocortisone (HAT therapy):**
- Marik 2017: Dramatic improvement
- Follow-up trials: Mixed results, no clear benefit
- Reasonable to consider in refractory sepsis, not standard

**Immunomodulation:**
- **IL-6 blockade (tocilizumab):** For cytokine release syndrome
- **IL-1 blockade (anakinra):** For MAS, HLH
- **GM-CSF (sargramostim):** For septic immunoparesis
- **Interferon gamma:** For restoring immune function
- **Status:** Emerging, not guideline-endorsed

**Sepsis-induced cardiomyopathy:**
- Reversible LV dysfunction (30-50% of septic patients)
- Usually resolves within 7-10 days
- Treatment: Supportive, avoid excessive fluids
- Consider levosimendan (inodilator with calcium sensitization)

**Antibiotic stewardship:**
- De-escalate when cultures identify pathogen
- Duration: 7-10 days for most infections
- Procalcitonin-guided discontinuation (controversial)
- Avoid antibiotics for asymptomatic bacteriuria

## Personalized Vasopressor Therapy

**Pharmacogenomics:**
- β-receptor polymorphisms affect response
- α-receptor downregulation in septic shock
- Consider alternative vasopressors if poor response

**Permissive hypotension controversy:**
- **SEPSISPAM trial:** Lower MAP target (65-70 vs 80-85) - no difference overall
- **Chronic hypertension patients:** Higher MAP (80-85) may preserve renal function
- **Individualize** based on comorbidities

**Methylene blue:**
- Inhibits guanylate cyclase
- Reduces NO-mediated vasodilation
- Consider in refractory vasoplegia
- Dose: 1-2 mg/kg over 20 min, then infusion

**Angiotensin II:**
- ATHOS-3 trial: Improved MAP in distributive shock
- Approved (Giapreza) for vasodilatory shock
- Dose: 20 ng/kg/min titrated
- Use with norepinephrine (vasopressor-sparing effect)

## Advanced Cardiogenic Shock

**UNLOAD framework for cardiogenic shock:**

| Step | Intervention | Target |
|------|--------------|--------|
| U | Use of diuretics/MCS | ↓ LV filling pressures |
| N | Nitrates/vasodilators | ↓ Afterload (if BP permits) |
| L | Loop diuretics | ↓ Pulmonary congestion |
| O | Optimize volume status | Euvolemia |
| A | Active inotropes | ↑ Contractility |
| D | Diuretics | Maintain euvolemia |

**Mechanical circulatory support selection:**

| Device | CO Support | Afterload Effect | Best For |
|--------|-----------|------------------|----------|
| IABP | Minimal (0.5 L/min) | Decreases | Mechanical complications |
| Impella CP | 3-4 L/min | Decreases | Isolated LV failure |
| Impella 5.5 | 5 L/min | Decreases | Profound cardiogenic shock |
| VA-ECMO | Full cardiopulmonary | Increases | Cardiac arrest, RV failure, biventricular failure |

**ECMO weaning:**
- Daily assessment of recovery
- Echocardiographic parameters: LVEF, LVOT VTI
- Reduce flows gradually
- Remove when support minimal (≤1 L/min)

**Pulmonary embolism response teams (PERT):**
- Multidisciplinary approach to massive PE
- Individualized treatment: Thrombolysis vs catheter-directed vs surgical
- Advanced therapies: Mechanical thrombectomy, ultrasound-assisted thrombolysis

## Refractory Shock Strategies

**Corticosteroids in septic shock:**
- **ADRENAL trial:** Hydrocortisone + fludrocortisone improved mortality in septic shock
- **Vanishing bile acids syndrome:** Adrenal crisis from hemorrhagic necrosis
- **Dosing:** Hydrocortisone 50 mg IV q6h (or continuous infusion)
- **Taper** when shock resolved

**Thyroid hormone in critical illness:**
- Non-thyroidal illness syndrome (low T3, normal/low TSH)
- **Not routinely** replaced
- Consider in refractory cardiogenic shock (T3 improves contractility)

**Renal replacement therapy in shock:**
- CRRT preferred (hemodynamic tolerance)
- Cytokine removal (convection vs diffusion)
- Indications: Refractory acidosis, volume overload, uremia, hyperkalemia

**Extracorporeal CO2 removal:**
- Allows ultraprotective ventilation
- May reduce ventilator-induced lung injury
- Limited availability

## Shock in Special Populations

**Obesity (BMI >40):**
- Altered pharmacokinetics (higher doses)
- Difficult vascular access
- Imaging limitations
- Higher complication rates

**Pregnancy:**
- Aortocaval compression (left lateral position)
- Blood volume increased (50% more)
- Physiologic anemia (dilutional)
- Fetal monitoring
- Vasopressors: Phenylephrine preferred (maintains uterine perfusion)

**Pediatrics:**
- Different normal values (HR, BP)
- Compensatory mechanisms robust until sudden collapse
- Blood volume: 80 mL/kg (vs 70 in adults)
- Weight-based dosing critical

**Elderly (>75):**
- Higher mortality for all shock types
- Comorbidities complicate management
- Altered baseline mental status
- Goals of care discussion

## Complications of Shock and Treatment

**ICU-acquired weakness:**
- Immobilization, corticosteroids, sepsis
- Prolonged ventilation, difficult wean
- Prevention: Early mobilization, minimize sedation

**Abdominal compartment syndrome:**
- IAP >20 mmHg with organ dysfunction
- Causes: Aggressive fluid resuscitation, capillary leak
- Treatment: Decompressive laparotomy

**DIC (Disseminated Intravascular Coagulation):**
| Overt DIC | Non-overt DIC |
|-----------|---------------|
| Bleeding, thrombosis | Laboratory abnormalities only |
| Low platelets, fibrinogen | Slight abnormalities |
| Elevated D-dimer | Moderate D-dimer |
| Treatment: Replace factors | Observation |

**Limb ischemia from vasopressors:**
- Norepinephrine: Dose-related risk
- Monitor: Capillary refill, pulses, skin color
- Consider vasodilator infusion (nitro, phentolamine) locally

## Withdrawal of Support

**When is shock futile?**

**Considerations:**
- Duration of shock (>5-7 days with worsening)
- Multiorgan failure (≥3 organs)
- Refractory despite maximal therapy
- Poor functional baseline
- Patient preferences

**Communication:**
- Prognostication with family
- Daily goals of care discussions
- Ethical consultation when disagreements

**Valid futility criteria:**
- Physiologic futility: Treatment cannot achieve target
- Qualitative futility: Quality of life unacceptable to patient

**Time-limited trials:**
- "We'll try X for Y days, then reassess"
- Allows families to see response
- Maintains trust`,
      keyTerms: [
        { term: 'ENDOTOXIN', definition: 'Lipopolysaccharide component of gram-negative bacterial cell wall; triggers inflammatory cascade in sepsis' },
        { term: 'cytokine release syndrome', definition: 'Massive immune activation with cytokine storm; can be triggered by infections, CAR-T therapy, other stimuli' },
        { term: 'abdominal compartment syndrome', definition: 'Organ dysfunction caused by increased intra-abdominal pressure (>20 mmHg); requires decompressive laparotomy' },
        { term: 'vasoplegic syndrome', definition: 'Profound vasodilation resistant to high-dose vasopressors; often post-CPB or in late septic shock' },
        { term: 'PERT', definition: 'Pulmonary Embolism Response Team; multidisciplinary team for rapid decision-making in massive/submassive PE' },
        { term: 'IAP', definition: 'Intra-abdominal pressure; elevated in shock from fluid resuscitation, capillary leak, ileus' },
      ],
      analogies: [
        'Abdominal compartment syndrome is like wearing pants that are three sizes too small - nothing can expand properly and everything gets squeezed.',
        'Vasoplegic syndrome is like trying to inflate a tire with a hole in it - no matter how much air (vasopressors) you put in, it won\'t hold pressure.',
        'Cytokine storm is like a sprinkler system that won\'t turn off - it was meant to put out small fires but ends up flooding the whole house.',
      ],
      clinicalNotes: `Expert clinical pearls for shock management:

1. **Sepsis antibiotics:** Time to antibiotics matters. Every hour of delay increases mortality. Give broad spectrum within 1 hour, then narrow.

2. **Vasopressor choice:** Norepinephrine is first-line. Add vasopressin (up to 0.03 U/min) before escalating norepinephrine above 0.5 mcg/kg/min.

3. **Fluid responsiveness:** Don\'t give fluids blindly. Use passive leg raise, pulse pressure variation, or stroke volume variation to assess.

4. **Lactate trends matter more than absolute values. A decreasing trend means your therapy is working.

5. **Cardiogenic shock with pulmonary edema:** This is the scenario where dobutamine shines. It increases contractility while vasodilating (reduces afterload).

6. **Massive PE:** If hypotensive with confirmed PE, don\'t delay. Give alteplase 100 mg over 2 hours OR arrange catheter-directed therapy OR surgical embolectomy.

7. **Anaphylaxis:** Don\'t be afraid of epinephrine. IM epinephrine is life-saving and much safer than dying from anaphylaxis.

8. **Septic cardiomyopathy:** The LV usually recovers in 7-10 days. Support the patient with fluids, vasopressors, and inotropes as needed.

9. **Refractory shock:** Revisit the diagnosis. Is it really the shock type you think it is? Consider additional causes: adrenal insufficiency, thyroid disorders, toxins.

10. **Goals of care:** Refractory shock is a terminal condition for many patients. Having honest, compassionate conversations with families is as important as any medication.`,
    },
  },

  media: [
    {
      id: 'shock-classification',
      type: 'diagram',
      filename: 'shock-classification.svg',
      title: 'Classification of Shock Types',
      description: 'Diagram showing categories of shock with etiologies and key features',
    },
    {
      id: 'shock-pathophysiology',
      type: 'diagram',
      filename: 'shock-pathophysiology.svg',
      title: 'Shock Pathophysiology',
      description: 'Diagram showing cellular response to shock and compensatory mechanisms',
    },
    {
      id: 'vasopressor-mechanisms',
      type: 'diagram',
      filename: 'vasopressor-mechanisms.svg',
      title: 'Vasopressor Mechanisms',
      description: 'Receptor targets and clinical effects of common vasopressors',
    },
  ],

  citations: [
    {
      id: 'sepsis-3-definition',
      type: 'article',
      title: 'The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3)',
      authors: ['Seymour, C.W.', 'et al.'],
      source: 'JAMA',
      url: 'https://jamanetwork.com/journals/jama/fullarticle/2492881',
      accessedDate: '2026-01-26',
    },
    {
      id: 'surviving-sepsis-2021',
      type: 'article',
      title: 'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
      authors: ['Evans, L.', 'et al.'],
      source: 'Critical Care Medicine',
      url: 'https://journals.lww.com/ccmjournal/Fulltext/2021/11001/Executive_Summary__Surviving_Sepsis_Campaign.13.aspx',
      accessedDate: '2026-01-26',
    },
    {
      id: 'soap2-trial',
      type: 'article',
      title: 'Comparison of Dopamine and Norepinephrine in the Treatment of Shock',
      authors: ['De Backer, D.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa0907118',
      accessedDate: '2026-01-26',
    },
    {
      id: 'athanasios-angii',
      type: 'article',
      title: 'Angiotensin II for the Treatment of Vasodilatory Shock',
      authors: ['Khanna, A.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1704154',
      accessedDate: '2026-01-26',
    },
    {
      id: 'iabp-shock-2',
      type: 'article',
      title: 'Intra-aortic Balloon Support in Myocardial Infarction Complicated by Cardiogenic Shock',
      authors: ['Thiele, H.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1308327',
      accessedDate: '2026-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Cardiac Arrest' },
    { targetId: 'emergency-trauma-primary-survey', targetType: 'topic', relationship: 'related', label: 'Primary Trauma Survey' },
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'related', label: 'Cardiovascular System' },
  ],

  tags: {
    systems: ['cardiovascular', 'all'],
    topics: ['emergency medicine', 'critical care', 'shock', 'sepsis', 'anaphylaxis'],
    keywords: ['shock', 'hypovolemic', 'septic', 'cardiogenic', 'anaphylactic', 'obstructive', 'vasopressors', 'lactate'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'internal medicine', 'critical care'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default shock;
