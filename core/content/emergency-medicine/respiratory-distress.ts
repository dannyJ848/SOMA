/**
 * Respiratory Distress and Failure - Airway, Breathing, and Emergency Management
 *
 * Comprehensive content on respiratory emergencies including airway assessment,
 * respiratory distress causes, mechanical ventilation, and intubation.
 */

import { EducationalContent } from '../types';

export const respiratoryDistress: EducationalContent = {
  id: 'emergency-respiratory-distress',
  type: 'condition',
  name: 'Respiratory Distress',
  alternateNames: ['Respiratory Failure', 'Acute Respiratory Distress', 'ARDS', 'Acute Respiratory Failure'],

  levels: {
    1: {
      level: 1,
      summary: 'Respiratory distress happens when someone can\'t breathe well enough to get oxygen to their body. This is an emergency that needs immediate help.',
      explanation: `## What Is Respiratory Distress?

Respiratory distress means someone is struggling to breathe. Their body isn't getting enough oxygen, which can quickly become life-threatening.

**Remember:** Every cell in your body needs oxygen. Without oxygen, cells start to die within minutes!

## Signs Someone Can't Breathe Well

**Look for these signs:**
- Breathing very fast or very slow
- Using muscles in the neck and chest to breathe
- Nostrils flaring (especially in children)
- Lips or fingernails turning blue or gray
- Making wheezing, grunting, or gasping sounds
- Can't speak in full sentences
- Sitting upright and leaning forward (tripod position)
- Looking anxious, scared, or confused
- Chest pain

**ALWAYS CALL 911 if you see these signs!**

## Common Causes of Breathing Problems

### 1. Asthma Attack

**What happens:** Airways squeeze shut and make it hard to breathe out

**Signs:**
- Wheezing (whistling sound when breathing)
- Coughing
- Chest tightness
- Trouble talking

**What to do:**
- Use rescue inhaler if available
- Stay calm (panic makes it worse)
- Call 911 if not improving

### 2. Allergic Reaction

**What happens:** Throat swells, making it hard to breathe

**Signs:**
- Swollen lips, tongue, or throat
- Hives (red, itchy rash)
- Wheezing
- Trouble swallowing

**What to do:**
- Use EpiPen if available
- Call 911 immediately!

### 3. Choking

**What happens:** Something blocks the airway

**Signs:**
- Can't breathe at all
- Can't speak or cough
- Hands clutching throat (universal sign)
- Skin turning blue

**What to do:**
- **Adult:** Abdominal thrusts (Heimlich maneuver)
- **Baby:** Back blows and chest thrusts
- **Call 911 immediately!**

### 4. Pneumonia or Infection

**What happens:** Lungs fill with fluid or infection

**Signs:**
- Fever
- Cough with phlegm
- Shortness of breath
- Chest pain when breathing

### 5. COPD (Smoker's Lung)

**What happens:** Lungs are damaged from smoking

**Signs:**
- Chronic cough
- Frequent infections
- Always short of breath
- Wheezing

### 6. Heart Problem

**What happens:** Heart can't pump well, fluid backs up into lungs

**Signs:**
- Shortness of breath, especially when lying flat
- Swollen feet and ankles
- Waking up gasping for air

## What To Do in an Emergency

**If someone can't breathe:**

1. **Call 911 immediately!**

2. **Help them sit up** (unless injured)
   - Sitting helps the lungs expand better

3. **Loosen tight clothing**
   - Buttons, belts, ties

4. **Stay calm and reassure them**
   - Panic makes breathing worse
   - Tell them help is coming

5. **Check if they have medications**
   - Inhalers for asthma
   - EpiPen for allergies
   - Oxygen if prescribed

6. **Be ready to do CPR**
   - If they stop breathing completely

## Oxygen and Breathing Help

**What doctors might do:**
- Give extra oxygen through a mask or tubes
- Use medicines to open airways
- Put a breathing tube down the throat (intubation)
- Use a machine to help them breathe (ventilator)

## Prevention

**Keep lungs healthy:**
- Don't smoke or quit smoking
- Get flu and pneumonia vaccines
- Avoid triggers if you have asthma
- Exercise regularly
- See a doctor for breathing problems that don't go away

## Remember

**Breathing problems can get worse FAST.**

Don't wait to see if someone gets better on their own. Call for help immediately if you see signs of respiratory distress!

**Every minute without enough oxygen can cause permanent damage.**`,
      keyTerms: [
        { term: 'respiratory distress', definition: 'When someone is struggling to breathe and their body isn\'t getting enough oxygen' },
        { term: 'intubation', definition: 'Putting a tube down the throat into the windpipe to help someone breathe' },
        { term: 'ventilator', definition: 'A machine that helps people breathe by pushing air into the lungs' },
        { term: 'wheezing', definition: 'A whistling sound when breathing, usually caused by narrowed airways' },
        { term: 'CPR', definition: 'Cardiopulmonary resuscitation - pressing on the chest to help blood circulate when the heart stops' },
      ],
      analogies: [
        'Your lungs are like sponges - they need to expand to fill with air, then squeeze to push air out.',
        'An asthma attack is like breathing through a coffee stirrer instead of a straw - the airways are too narrow.',
        'A ventilator is like a bellows for a fireplace - it pushes air in when the person can\'t do it themselves.',
      ],
      examples: [
        'A teenager with asthma starts wheezing at a party. Someone finds their rescue inhaler, and they take two puffs. The wheezing improves and they can breathe better.',
        'A man is stung by a bee and his lips start swelling. He can\'t breathe well. His wife uses his EpiPen and calls 911. The swelling starts to go down.',
        'An elderly woman suddenly can\'t breathe and has chest pain. Her daughter calls 911 immediately. Paramedics give her oxygen and take her to the hospital.',
      ],
      patientCounselingPoints: [
        'If you have asthma, always carry your rescue inhaler',
        'Learn CPR - it could save someone\'s life',
        'If you have severe allergies, carry an EpiPen and make sure family knows how to use it',
        'Don\'t ignore breathing problems - seek medical care if shortness of breath doesn\'t go away',
      ],
    },

    2: {
      level: 2,
      summary: 'Respiratory distress is inadequate oxygenation or ventilation. Recognition of signs, understanding causes, and knowing when to intervene with oxygen, medications, or airway support is essential.',
      explanation: `## Respiratory Distress Overview

Respiratory distress exists when breathing is inadequate to meet the body's oxygen needs. This can involve:
- **Oxygenation problems:** Not enough oxygen getting into blood
- **Ventilation problems:** Not moving enough air in and out
- **Both:** Severe distress often involves both

**Time is critical** - without oxygen, brain cells begin to die within 4-6 minutes.

## Signs and Symptoms

**Subjective complaints:**
- "I can't breathe"
- "Air hunger" - feeling of not getting enough air
- Chest tightness
- Shortness of breath at rest or with minimal activity

**Objective findings:**
- **Respiratory rate:** Abnormal (<10 or >20 breaths/minute)
- **Oxygen saturation:** SpO2 <94% on room air
- **Work of breathing:** Using accessory muscles, retractions
- **Breath sounds:** Wheezing, crackles, stridor, diminished sounds
- **Mental status:** Anxiety, confusion, decreased consciousness
- **Color:** Cyanosis (blue tint), pallor

**Tripod position:**
- Sitting upright, leaning forward with hands on knees
- Helps accessory muscles work better
- Classic sign of respiratory distress

## Causes of Respiratory Distress

### Upper Airway Problems

**Obstruction:**
- Foreign body (choking)
- Tongue obstruction (unconscious patient)
- Swelling (anaphylaxis, infection)
- Trauma

**Signs:**
- Stridor (high-pitched sound on inspiration)
- Difficulty swallowing
- Muffled voice ("hot potato voice")

**Treatment:**
- Clear airway (Heimlich, suction, intubation)
- Epinephrine for swelling
- Airway positioning

### Lower Airway Problems

**Asthma:**
- Bronchoconstriction, inflammation, mucus
- Wheezing (expiratory > inspiratory)
- Chest tightness, cough

**COPD:**
- Emphysema: Destruction of alveoli
- Chronic bronchitis: Chronic cough, sputum
- Barrel chest, pursed-lip breathing

**Bronchiolitis:**
- Viral infection (RSV most common)
- Infants and young children
- Wheezing, crackles

### Lung Parenchyma Problems

**Pneumonia:**
- Infection fills alveoli with fluid
- Fever, cough, purulent sputum
- Focal crackles on exam

**Pulmonary edema:**
- Fluid in alveoli from heart failure
- Pink, frothy sputum
- Crackles throughout lungs
- Often worse when lying flat

**ARDS (Acute Respiratory Distress Syndrome):**
- Severe lung injury
- Diffuse infiltrates on CXR
- Hypoxia not responding to oxygen
- High mortality

### Pulmonary Vascular Problems

**Pulmonary embolism:**
- Blood clot in lungs
- Sudden onset dyspnea
- Pleuritic chest pain
- Tachycardia, hypoxia

**Pulmonary hypertension:**
- High pressure in lung arteries
- Progressive dyspnea
- Chest pain, syncope

### Neuromuscular Problems

**Guillain-Barré syndrome:**
- Ascending paralysis
- Can progress to respiratory failure
- Weakness progresses from legs to trunk to respiratory muscles

**Myasthenia gravis:**
- Muscle weakness worsening with activity
- Can cause respiratory muscle failure
- Ptosis, diplopia also present

**Spinal cord injury:**
- Damage to phrenic nerve (C3-5)
- Can't breathe without ventilator if injury high enough

## Oxygen Therapy

**Delivery systems:**

| System | Flow (L/min) | FiO2 (%) | Best For |
|--------|--------------|----------|----------|
| Nasal cannula | 1-6 | 24-44 | Mild hypoxia |
| Simple face mask | 5-10 | 40-60 | Moderate hypoxia |
| Venturi mask | 4-15 | 24-60 | Precise FiO2 needed, COPD |
| Non-rebreather | 10-15 | 80-95+ | Severe hypoxia |
| High-flow nasal cannula | Up to 60 | 21-100 | Severe distress |

**Target saturation:**
- Most patients: 94-98%
- COPD patients at risk of hypercapnia: 88-92%
- **Too much oxygen can be harmful!**

## Bronchodilators

**Short-acting (rescue):**
- **Albuterol:** β2-agonist, rapid bronchodilation
- **Ipratropium:** Anticholinergic, slower onset

**Combination:**
- Albuterol + ipratropium (DuoNeb)

**Administration:**
- MDI with spacer
- Nebulizer (continuous for severe asthma)

**Side effects:**
- Tachycardia
- Tremor
- Hypokalemia
- Palpitations

## Indications for Intubation

**Absolute indications:**
- Apnea (not breathing)
- Respiratory arrest
- Severe hypoxia not responding to oxygen
- GCS ≤8 (can't protect airway)
- Upper airway obstruction

**Relative indications:**
- Rising respiratory rate with fatigue
- Worsening blood gas values
- Inability to clear secretions
- Need for procedures

**Rapid Sequence Intubation (RSI):**
1. Pre-oxygenate (100% O2 for 3-5 minutes)
2. Pretreat (lidocaine, atropine as indicated)
3. Paralyze (rocuronium, succinylcholine)
4. Sedate (etomidate, propofol, ketamine)
5. Position and intubate
6. Confirm placement (CO2 detector, auscultation)
7. Secure tube

## Assessment Tools

**Pulse oximetry:**
- Measures oxygen saturation
- Normal: 95-100%
- <90%: Significant hypoxia

**Capnography (CO2 monitoring):**
- ETCO2: Partial pressure of exhaled CO2
- Normal: 35-45 mmHg
- Confirms endotracheal tube placement
- Monitors ventilation during CPR

**Arterial blood gas (ABG):**

| Parameter | Normal | Respiratory Distress |
|-----------|--------|---------------------|
| pH | 7.35-7.45 | May be low (acidosis) |
| PaO2 | 80-100 mmHg | Low |
| PaCO2 | 35-45 mmHg | Low (hyperventilating) or high (fatigue) |
| HCO3- | 22-26 mEq/L | Normal (acute) or high (chronic) |
| SaO2 | >95% | Low |

**Chest X-ray findings:**
- Hyperinflation (asthma, COPD)
- Infiltrates/consolidation (pneumonia)
- Pulmonary edema (heart failure)
- Pneumothorax (collapsed lung)`,
      keyTerms: [
        { term: 'hypoxia', definition: 'Low oxygen levels in the body\'s tissues' },
        { term: 'hypoxemia', definition: 'Low oxygen levels in the blood' },
        { term: 'cyanosis', definition: 'Bluish color of the skin and mucous membranes caused by low oxygen' },
        { term: 'stridor', definition: 'High-pitched, noisy breathing heard when inhaling; indicates upper airway obstruction' },
        { term: 'FiO2', definition: 'Fraction of inspired oxygen; the concentration of oxygen being delivered (room air is 21%)' },
        { term: 'RSI', definition: 'Rapid Sequence Intubation; a fast method of placing a breathing tube using medications to paralyze and sedate' },
      ],
      analogies: [
        'The airway is like a tree - the trunk is the windpipe, branches are the bronchi, and leaves are the alveoli where oxygen enters the blood.',
        'Pulse oximetry is like a fuel gauge for oxygen - it tells you how full the tank is.',
        'Intubation is like putting a straw in a drink - you\'re creating a direct path for air to reach the lungs.',
      ],
      examples: [
        'Asthma exacerbation: 20-year-old with wheezing, SpO2 88%. Albuterol nebulizer given. SpO2 improves to 94%. Discharged with prednisone and inhaler.',
        'COPD exacerbation: 70-year-old smoker with increased dyspnea, SpO2 85%. Given 28% oxygen via Venturi mask. Improves to 92%. Admitted for steroids and antibiotics.',
        'Anaphylaxis: 35-year-old after bee sting. Lip swelling, stridor, wheezing. Epinephrine 0.3 mg IM given. Airway improves. Admitted for observation.',
      ],
      patientCounselingPoints: [
        'Learn to recognize your breathing baseline so you notice when it\'s getting worse',
        'Use your rescue inhaler as prescribed - don\'t wait until you\'re in distress',
        'If you have lung disease, get a pulse oximeter to monitor your oxygen at home',
        'Create an asthma action plan with your doctor so you know what to do when symptoms worsen',
      ],
    },

    3: {
      level: 3,
      summary: 'Respiratory failure is inadequate oxygenation (Type I) or ventilation (Type II). Management requires airway assessment, oxygen delivery, bronchodilators, and timely intubation when indicated.',
      explanation: `## Respiratory Failure Classification

**Definition:** Inability to maintain either normal oxygenation (PaO2 <60 mmHg) or ventilation (PaCO2 >50 mmHg).

**Type I Hypoxemic Respiratory Failure:**
- **Problem:** Oxygenation failure
- **Findings:** Low PaO2, normal or low PaCO2
- **Causes:** Pneumonia, pulmonary edema, ARDS, PE
- **Pathophysiology:** V/Q mismatch, shunt, diffusion impairment

**Type II Hypercapnic Respiratory Failure:**
- **Problem:** Ventilation failure
- **Findings:** Low PaO2, HIGH PaCO2
- **Causes:** COPD, drug overdose, neuromuscular disease
- **Pathophysiology:** Alveolar hypoventilation

**V/Q Mismatch:**
- **V** = Ventilation (air getting to alveoli)
- **Q** = Perfusion (blood flowing to alveoli)
- **Mismatch:** Ventilation and perfusion not matched
- Most common cause of hypoxemia

**Shunt:**
- Blood flows past alveoli without picking up oxygen
- Does NOT respond to supplemental O2
- Examples: Atelectasis, pulmonary edema, ARDS

## Airway Assessment

**The "LEMON" assessment for difficult airway:**

**L - Look:**
- Large teeth, beard, facial hair
- Facial trauma
- Large tongue

**E - Evaluate:**
- 3-finger breadth mouth opening (<3 fingers = difficult)
- 2-finger hyoid-mental distance (<2 cm = difficult)
- 1-finger thyrohyoid distance (<1 cm = difficult)

**M - Mallampati:**
- Class I: Soft palate, uvula, fauces visible
- Class II: Soft palate, uvula visible
- Class III: Soft palate visible
- Class IV: Only hard palate visible
- Higher class = more difficult

**O - Obstruction:**
- Foreign body
- Blood, vomit, secretions
- Swelling (angioedema, infection)
- Tumor

**N - Neck mobility:**
- Limited extension = difficult intubation
- C-spine collar limits mobility

**Stridor assessment:**
- **Inspiratory stridor:** Upper airway (above vocal cords)
- **Biphasic stridor:** Glottic/subglottic
- **Expiratory stridor:** Lower airway (asthma)
- **Pitch:** Higher pitch = more critical obstruction

## Respiratory Distress Syndromes

### Acute Respiratory Distress Syndrome (ARDS)

**Berlin Definition (2012):**

| Severity | Onset | PaO2/FiO2 | PEEP | CXR |
|----------|-------|-----------|------|-----|
| Mild | ≤1 week | 201-300 | ≥5 | Bilateral infiltrates |
| Moderate | ≤1 week | 101-200 | ≥5 | Bilateral infiltrates |
| Severe | ≤1 week | ≤100 | ≥5 | Bilateral infiltrates |
| | | | | + cardiac edema excluded |

**Pathophysiology:**
- Direct lung injury (pneumonia, aspiration) OR
- Indirect lung injury (sepsis, pancreatitis, trauma)
- Diffuse alveolar damage
- Increased permeability pulmonary edema
- Surfactant inactivation
- Atelectasis

**Treatment principles:**
- Lung-protective ventilation (TV 6-8 mL/kg IBW)
- PEEP to recruit alveoli
- Permissive hypercapnia (allow higher PaCO2)
- Prone positioning for severe ARDS
- Conservative fluid strategy
- Treat underlying cause

### Status Asthmaticus

**Definition:** Severe asthma exacerbation not responding to initial bronchodilator therapy

**Clinical findings:**
- Silent chest (no wheezing = very bad!)
- Accessory muscle use
- Diaphoresis
- Altered mental status
- Pulsus paradoxus (>10 mmHg drop in BP during inspiration)

**Management:**
- Continuous albuterol nebulization
- Ipratropium nebulization (q4-6h)
- Systemic corticosteroids (methylprednisolone 60-125 mg IV)
- Magnesium sulfate (1-2 g IV) if severe
- Consider heliox if available
- Intubation if deteriorating ( LAST resort)

**Ventilation challenges in asthma:**
- Severe air trapping (auto-PEEP)
- Risk of pneumothorax
- Need for prolonged expiratory time
- Permissive hypercapnia required

### COPD Exacerbation

**Triggers:**
- Infection (most common)
- Nonadherence to medications
- Environmental irritants
- Pulmonary embolism

**Management:**
- Bronchodilators (albuterol, ipratropium)
- Corticosteroids (prednisone 40 mg daily x5 days)
- Antibiotics if suspected infection
- Oxygen: Target SpO2 88-92% (avoid hypercapnia)
- Consider NIV (BiPAP) first-line for respiratory acidosis

**NIV (Non-Invasive Ventilation):**
- **Indications:** pH 7.25-7.35, PaCO2 >45 mmHg
- **Contraindications:** Altered mental status, aspiration risk, inability to protect airway
- **Settings:** IPAP 10-14, EPAP 4-6

## Intubation and Mechanical Ventilation

**RSI medications:**

**Induction agents:**
- **Etomidate:** 0.3 mg/kg IV - hemodynamically neutral
- **Propofol:** 1-2 mg/kg IV - hypotension risk
- **Ketamine:** 1-2 mg/kg IV - maintains hemodynamics, bronchodilator

**Paralytics:**
- **Succinylcholine:** 1-1.5 mg/kg IV - rapid onset (30-60 sec), short duration
  - Contraindications: Hyperkalemia, neuromuscular disease, burns >48h
- **Rocuronium:** 1-1.2 mg/kg IV - longer duration
  - Reversal: Sugammadex (rapid)

**Post-intubation:**
- Confirm tube placement (CO2 detector, auscultation, CXR)
- Sedation (propofol, fentanyl)
- Ventilator settings

**Initial ventilator settings:**

| Patient Mode | TV (mL/kg) | Rate | FiO2 | PEEP |
|--------------|------------|------|------|------|
| Normal lung | 6-8 | 12-16 | Titrate to SpO2 | 5 |
| ARDS | 6-8 | 12-20 | Start 100%, wean | Higher (10-24) |
| COPD | 6-8 | 8-12 | Titrate to SpO2 | 5-8 |
| Neuromuscular | 6-8 | 10-14 | Titrate to SpO2 | 5 |

**Advanced ventilator concepts:**

**PEEP (Positive End-Expiratory Pressure):**
- Keeps alveoli open at end of expiration
- Improves oxygenation
- Too much PEEP: Decreases venous return, decreases cardiac output

**Auto-PEEP (intrinsic PEEP):**
- Air trapping from incomplete exhalation
- Common in COPD, asthma
- Increases work of breathing
- Can cause barotrauma and hypotension

**Plateau pressure:**
- Pressure in alveoli at end of inspiration
- Reflects lung compliance
- Keep <30 cmH2O to prevent VILI

**Driving pressure:**
- Plateau pressure - PEEP
- Higher driving pressure = more lung injury
- Target <15 cmH2O

## Complications of Respiratory Failure

**Pneumothorax:**
- Air in pleural space
- Can be iatrogenic (from intubation, vent)
- Tension pneumothorax is medical emergency

**Mucous plugging:**
- Secretions block airway
- More common with dehydrated, thick secretions
- Requires suctioning

**Ventilator-associated pneumonia (VAP):**
- Pneumonia developing >48h after intubation
- Prevent with head of bed elevation, oral care
- Treat with appropriate antibiotics

**Auto-PEEP:**
- Air trapping leading to hyperinflation
- Causes hypotension, barotrauma
- Treat by decreasing rate, increasing expiratory time`,
      keyTerms: [
        { term: 'Type I respiratory failure', definition: 'Hypoxemic respiratory failure; low PaO2 with normal or low PaCO2. Problem is oxygenation.' },
        { term: 'Type II respiratory failure', definition: 'Hypercapnic respiratory failure; low PaO2 with high PaCO2. Problem is ventilation.' },
        { term: 'V/Q mismatch', definition: 'Ventilation-perfusion mismatch; areas of lung receiving air but no blood flow or blood flow but no air' },
        { term: 'ARDS', definition: 'Acute Respiratory Distress Syndrome; severe lung injury with diffuse infiltrates, hypoxia not responding to oxygen' },
        { term: 'auto-PEEP', definition: 'Intrinsic positive end-expiratory pressure from air trapping; air doesn\'t fully exit before next breath in' },
        { term: 'PaO2/FiO2 ratio', definition: 'Ratio of arterial oxygen to fraction of inspired oxygen; assesses lung function. <300 = impaired' },
      ],
      analogies: [
        'V/Q mismatch is like having lanes closed on a highway - some cars (air) get through but the road isn\'t flowing efficiently.',
        'Auto-PEEP is like blowing up a balloon but not letting all the air out before blowing again - eventually the balloon might burst.',
        'ARDS lungs are like wet sponges - they\'re stiff, heavy, and don\'t expand well.',
      ],
      examples: [
        'Severe asthma: 25-year-old with respiratory arrest. Intubated with ketamine + rocuronium. Vent set to low respiratory rate (10) with long expiratory time. Auto-PEEP minimized. Transferred to ICU.',
        'ARDS: 60-year-old with pneumonia, PaO2/FiO2 120. Lung-protective ventilation initiated (TV 450 mL, PEEP 12). Prone positioning considered. Paralyzed for 48h.',
        'COPD exacerbation: 75-year-old, pH 7.28, PaCO2 68. BiPAP started. pH improves to 7.35. Avoids intubation.',
      ],
      patientCounselingPoints: [
        'If you have COPD, ask your doctor about a rescue plan for exacerbations',
        'NIV (BiPAP) can prevent intubation in many COPD exacerbations',
        'After intubation, you\'ll receive sedation to keep you comfortable',
        'Proning (lying on stomach) can improve oxygenation in severe ARDS',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced respiratory failure management requires understanding of lung mechanics, ventilator waveforms, advanced oxygen delivery strategies, and evidence-based protocols for ARDS and severe respiratory failure.',
      explanation: `## Advanced Respiratory Physiology

**Oxygen transport equation:**

\`\`\`
DO2 = CO × (CaO2)

CaO2 = (Hb × 1.34 × SaO2) + (0.003 × PaO2)

Therefore: DO2 = CO × [(Hb × 1.34 × SaO2) + (0.003 × PaO2)]
\`\`\`

**Clinical implications:**
- Hemoglobin contributes most to oxygen content
- PaO2 contributes very little (<2% at normal PaO2)
- Increasing hemoglobin (transfusion) often more effective than increasing FiO2
- Normal cardiac output essential for oxygen delivery

**Work of breathing:**

\`\`\`
WOB = (TV × Compliance × Resistance²) / Efficiency
\`\`\`

**Components:**
- **Elastic work:** Overcoming lung/chest wall compliance (30-40% of total)
- **Resistive work:** Overcoming airway resistance (60-70% of total)

**Increased WOB in:**
- COPD (increased resistance)
- ARDS (decreased compliance)
- Obesity (decreased compliance)
- Deconditioning (inefficient muscles)

**Respiratory muscles:**
- Diaphragm generates 70% of tidal volume
- Accessory muscles: Sternocleidomastoid, scalenes, intercostals
- Accessory muscle use = increased WOB
- Respiratory muscle fatigue leads to respiratory failure

## Advanced Ventilator Management

**Pressure vs Volume Control:**

**Volume Control (VC/AC):**
- Guarantees tidal volume
- Variable pressure
- Risk of barotrauma if compliance low
- Preferred when consistent Vt needed

**Pressure Control (PC/AC):**
- Guarantees peak pressure
- Variable tidal volume
- Limits barotrauma risk
- Preferred when protecting lungs from high pressures

**Pressure Support (PSV):**
- Patient-triggered breaths
- Weaning mode
- Patient must have adequate respiratory drive

**Modes of ventilation:**

| Mode | Description | Best For |
|------|-------------|----------|
| AC/VC | Assisted-control, volume cycled | Full respiratory support |
| AC/PC | Assisted-control, pressure cycled | Lung protection |
| SIMV | Synchronized intermittent mandatory ventilation | Weaning with spontaneous breaths |
| APRV | Airway pressure release ventilation | ARDS, refractory hypoxemia |
| HFOV | High-frequency oscillatory ventilation | Severe ARDS (rare) |
| ECMO | Extracorporeal membrane oxygenation | Refractory respiratory failure |

**ARDSNet Protocol (ARDS Network):**

**Lung-protective ventilation:**
- TV: 6 mL/kg IBW (ideal body weight)
- Plateau pressure: ≤30 cmH2O
- PEEP: 5-24 cmH2O (based on FiO2 requirement)
- Permissive hypercapnia allowed (pH ≥7.15 acceptable)
- Rescue therapies for refractory hypoxemia

**PEEP-FiO2 combinations:**

| PEEP | FiO2 | PEEP | FiO2 |
|------|------|------|------|
| 5 | 0.3 | 14 | 0.5 |
| 5 | 0.4 | 16 | 0.6 |
| 8 | 0.4 | 18 | 0.7 |
| 10 | 0.5 | 20 | 0.8 |
| 12 | 0.5 | 22 | 0.9 |
| 14 | 0.6 | 24 | 1.0 |

**Driving pressure (ΔP):**
- ΔP = Plateau pressure - PEEP
- Target <15 cmH2O
- Independent predictor of mortality in ARDS

**Transpulmonary pressure:**
- Pressure gradient across lung
- Plateau pressure - Pleural pressure
- Esophageal catheter to measure pleural pressure
- Optimize PEEP based on transpulmonary pressure

## Advanced Oxygen Delivery

**High-Flow Nasal Cannula (HFNC):**
- Flow up to 60 L/min
- Heated, humidified oxygen
- FiO2 21-100%
- **Mechanisms of action:**
  - Matches or exceeds patient inspiratory flow
  - Decreases entrainment of room air
  - Provides low level of PEEP (2-5 cmH2O)
  - Improves mucociliary clearance
  - Decreases dead space
- **Indications:** Severe pneumonia, post-extubation, COPD, palliative
- **Contraindications:** Nasal obstruction, severe epistaxis

**Nitric oxide (iNO):**
- Potent pulmonary vasodilator
- Improves V/Q matching in diseased lung
- No systemic effect (rapidly inactivated by hemoglobin)
- **Indications:** PPHN, ARDS (controversial), pulmonary hypertension
- **Dose:** 20 ppm (starting), titrate 1-20 ppm
- **Toxicity:** Methemoglobinemia at high doses, NO2 formation

**Heliox (helium-oxygen mixture):**
- Helium is less dense than nitrogen
- Decreases turbulent flow
- Improves oxygen delivery in upper airway obstruction
- **Ratios:** 80:20 or 70:30 helium:oxygen
- **Indications:** Severe asthma, croup, post-extubation stridor

**Extracorporeal Membrane Oxygenation (ECMO):**

**Indications for VV-ECMO:**
- Refractory hypoxemia despite optimal ventilation
- PaO2/FiO2 <50 despite PEEP >15, FiO2 1.0, paralysis, proning
- Reversible cause of respiratory failure
- No contraindications to anticoagulation

**ECLA (Extracorporeal CO2 Removal):**
- Removes CO2 at lower blood flows
- Allows ultraprotective ventilation
- May prevent ventilator-induced lung injury

## Advanced Airway Techniques

**Video Laryngoscopy:**
- Direct visualization of vocal cords
- Improved first-pass success in many settings
- Macintosh blade vs hyperangulated blade
- Helpful in cervical spine immobilization

**Bougie-assisted intubation:**
- Flexible stylet passed through cords
- Tube railroaded over bougie
- Helpful with difficult airway visualization

**Cricothyrotomy:**
- Surgical airway below vocal cords
- **Indications:** Cannot intubate, cannot ventilate
- **Contraindication:** <10-12 years old (cricoid too small)
- **Technique:** Vertical skin incision, horizontal cricothyroid membrane incision

**Fiber-optic intubation:**
- Awake intubation for difficult airway
- Maintains spontaneous ventilation
- Requires topicalization and sedation

## Prone Positioning

**Mechanisms of benefit:**
- Homogenizes pleural pressure gradient
- Recruits dorsal lung regions
- Improves V/Q matching
- Facilitates secretion drainage
- Reduces heart compression on left lung

**PROSEVA trial (2013):**
- Prone positioning 16 hours/day
- Reduced mortality from 32.8% to 16.0% in severe ARDS
- NNT = 6

**Contraindications:**
- Unstable spine
- Open chest or abdomen
- Hemodynamic instability
- Life-threatening arrhythmias
- Pregnancy

## Neuromuscular Respiratory Failure

**Guillain-Barré syndrome:**
- Ascending paralysis
- **VC (vital capacity) <20 mL/kg** = intubation criteria
- **NIF (negative inspiratory force) > -30** = intubation criteria
- Autonomic dysfunction common
- May require prolonged ventilation

**Myasthenia gravis crisis:**
- Acute worsening of weakness
- Avoid succinylcholine (can cause hyperKalemia)
- Prefer steroid-sparing agents for treatment
- Plasma exchange or IVIG effective

**Amyotrophic lateral sclerosis (ALS):**
- Progressive respiratory muscle weakness
- Non-invasive ventilation first-line
- Tracheostomy for long-term ventilation

## Weaning from Mechanical Ventilation

**Spontaneous breathing trial (SBT):**
- T-piece or low pressure support (5-7 cmH2O)
- Duration: 30-120 minutes
- **Pass criteria:** No distress, RR <35, SpO2 >90%, HR change <20%, BP change <20%
- **Failed SBT:** Return to previous ventilator settings for 24h

**Rapid shallow breathing index (RSBI):**
- RSBI = RR / TV (in liters)
- <105 predicts successful extubation
- >105 predicts failure

**Extubation readiness:**
- Alert and following commands
- Adequate cough and secretions
- Passed SBT
- No excessive respiratory demand
- Airway edema assessed (cuff leak)

**Reintubation risk factors:**
- Age >65
- High severity of illness
- Inadequate cough
- Thick secretions
- Prolonged ventilation (>7 days)
- Failed SBT

**Preventive strategies:**
- Steroids before extubation if high risk
- NIV immediately post-extubation in COPD, CHF
- High-flow nasal cannula post-extubation
- Aggressive pulmonary toilet`,
      keyTerms: [
        { term: 'driving pressure', definition: 'Plateau pressure minus PEEP. Higher driving pressure (>15 cmH2O) associated with increased mortality in ARDS' },
        { term: 'transpulmonary pressure', definition: 'Pressure gradient across lung (alveolar minus pleural pressure). Better reflects lung stress than airway pressure alone' },
        { term: 'HFNC', definition: 'High-Flow Nasal Cannula; delivers up to 60 L/min heated, humidified oxygen. Provides modest PEEP and improves comfort' },
        { term: 'SBT', definition: 'Spontaneous Breathing Trial; test of readiness to wean from mechanical ventilation by breathing with minimal support' },
        { term: 'RSBI', definition: 'Rapid Shallow Breathing Index; ratio of respiratory rate to tidal volume. <105 predicts extubation success' },
        { term: 'VV-ECMO', definition: 'Venovenous ECMO; provides oxygenation and CO2 removal without cardiac support. Used for respiratory failure' },
      ],
      analogies: [
        'Driving pressure is like the pressure difference in a water hose - it\'s what\'s actually pushing through, not just the pressure at the faucet.',
        'Prone positioning is like turning a mattress - it redistributes pressure and allows the compressed areas to recover.',
        'The RSBI is like checking fuel efficiency - if you\'re breathing fast but getting little air (high RSBI), you\'re inefficient and not ready to extubate.',
      ],
      examples: [
        'Severe ARDS: PaO2/FiO2 60 despite lung-protective ventilation. Patient paralyzed, proned. HFNC attempted after 7 days. Intubated again within 12 hours. ECMO initiated.',
        'GBS with respiratory failure: VC declined from 1.2 L to 0.6 L (8 mL/kg). Intubated electively. Treated with IVIG. Weaned after 10 days.',
        'Post-extubation stridor: Patient developed stridor after extubation. Racemic epinephrine given. Reintubated with smaller tube. Steroids given prior to second extubation. Successful.',
      ],
      patientCounselingPoints: [
        'Prone positioning (lying on your stomach) can dramatically improve oxygen levels in severe ARDS',
        'NIV (BiPAP) can prevent reintubation after extubation in COPD and heart failure patients',
        'High-flow nasal cannula is comfortable and may prevent intubation in some patients with pneumonia',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert-level respiratory care integrates cutting-edge ventilation strategies, ECMO management, difficult airway algorithms, and nuanced decision-making for complex respiratory failure scenarios.',
      explanation: `## State-of-the-Art Respiratory Failure Management

**Evolution of mechanical ventilation:**
1. **Iron lung (1920s-50s):** Negative-pressure ventilation
2. **Positive-pressure ventilation (1950s-present):** Modern ICU care
3. **Lung-protective ventilation (2000s):** ARDSNet protocol
4. **Personalized ventilation (emerging):** Esophageal pressure monitoring, EAdi, PEEP titration

**Current paradigm:**
- Lower tidal volumes (4-6 mL/kg IBW)
- Higher PEEP (recruit alveoli, prevent atelectrauma)
- Permissive hypercapnia (allow respiratory acidosis)
- Early paralysis in severe ARDS (first 48h)
- Prone positioning for moderate-severe ARDS
- ECMO as rescue therapy

## Advanced Ventilation Strategies

**Neurally Adjusted Ventilatory Assist (NAVA):**
- Measures electrical activity of diaphragm (EAdi)
- Ventilator delivers pressure in proportion to patient effort
- Improves patient-ventilator synchrony
- Prevents diaphragm atrophy
- Requires specialized EAdi catheter

**Proportional Assist Ventilation (PAV):**
- Ventilator amplifies patient's own effort
- Proportional to measured flow and volume
- Improves comfort
- Complex setup, limited availability

**Airway Pressure Release Ventilation (APRV):**
- Extended inspiratory time with brief releases
- Allows spontaneous breathing throughout
- Maintains alveolar recruitment
- Theoretical advantages in ARDS (mixed evidence)

**Open Lung Approach:**
- Recruit lung with high recruitment maneuver
- Set PEEP above closing pressure
- Avoid cyclic atelectasis
- May require paralysis

**Esophageal pressure-guided PEEP:**
- Esophageal catheter measures pleural pressure
- Calculate transpulmonary pressure
- PEEP set to keep end-expiratory transpulmonary pressure >0
- Personalized PEEP titration
- May improve outcomes in obesity, ARDS

## ECMO in Respiratory Failure

**Indications for VV-ECMO (EOLIA trial criteria):**
- PaO2/FiO2 <50 for >3 hours OR <80 for >6 hours
- Despite optimal ventilation:
  - PEEP ≥10 cmH2O
  - TV 6 mL/kg IBW
  - Paralysis
  - Prone positioning
- Reversible cause of respiratory failure
- <7 days of mechanical ventilation
- No contraindications to anticoagulation

**EOLIA trial (2018):**
- Early ECMO vs conventional management
- No significant difference in mortality (60-day mortality 35% vs 46%, p=0.09)
- Crossover to ECMO common (28% in control group)
- Suggested benefit in selected patients

**ECMO management:**
- **Cannulation:** VV (drainage from IVC/RA, return to RA)
- **Flow:** 3-5 L/min (sufficient for full support)
- **Sweep gas:** Controls CO2 removal
- **Anticoagulation:** Heparin infusion, target PTT 60-80
- **Ventilator settings while on ECMO:**
  - "Rest settings:" TV 3-4 mL/kg, PEEP 10, RR 5-10
  - Allow lung recovery

**ECMO complications:**
- Bleeding (30-50%)
- Thrombosis
- Limb ischemia (cannulation site)
- Infection
- Harlequin syndrome (VV-ECMO with poor lung function)

**ECMO weaning:**
- Decrease sweep gas first (allows PaCO2 to rise)
- Then decrease flow
- Trial off ECMO with "lung rest" settings
- Decannulate when tolerating minimal support

## Difficult Airway Algorithms

**ASA Difficult Airway Algorithm:**
1. **Assess** airway (LEMON, Mallampati)
2. **Plan** primary and backup approaches
3. **Execute** planned intubation
4. **If failed:** Maximize mask ventilation, consider alternative device
5. **If ventilation failed:** Emergency surgical airway

**Video laryngoscopy vs direct laryngoscopy:**
- VL improves first-pass success in many settings
- May be inferior for easy airways (learning curve)
- Hyperangulated blades require stylet
- Macintosh blades on VL combine advantages

**Awake intubation:**
- **Indications:** Known difficult airway, upper airway obstruction
- **Technique:** Topicalization + sedation (ketamine, dexmedetomidine)
- **Options:** Fiber-optic bronchoscopy, video laryngoscopy, fiber-optic via LMA
- **Advantages:** Maintains spontaneous ventilation

**Failed oxygenation (CICO):**
- Can't Intubate, Can't Oxygenate
- **Surgical airway required:**
  - Cricothyrotomy (adults)
  - Tracheostomy (pediatrics <10-12 years)
- **Technique:** Scalpel-bougie-tube or scalpel-finger-bougie

## Pharmacologic Advances

**Corticosteroids in ARDS:**
- DEXA-ARDS trial: Dexamethasone 20 mg daily x5 days, then 10 mg daily x5 days
- Reduced mortality (21% vs 36%)
- Increased ventilator-free days
- Considered for moderate-severe ARDS

**Neuromuscular blockade in ARDS:**
- ACURASYS trial: cisatracurium 48h improved mortality
- Re-evaluated in ROSE trial: No mortality benefit
- Current: Consider in early severe ARDS (PaO2/FiO2 <150)

**Inhaled pulmonary vasodilators:**
- **iNO:** Improved oxygenation in ARDS (no mortality benefit)
- **Epoprostenol:** Alternative to iNO, less expensive
- Consider in refractory hypoxemia or pulmonary hypertension

**Bronchodilators in non-asthma:**
- No clear benefit in ARDS
- May be tried in suspected bronchospasm
- Beta-agonists may have anti-inflammatory effects (controversial)

## Weaning and Extubation

**Predicting extubation success:**
- **RSBI** (<105 best predictor)
- **Cuff leak** (>110 mL or visible leak)
- **Diaphragmatic thickness** on ultrasound (thickening >30% during inspiration)
- **Diaphragm excursion** (>1 cm on ultrasound)

**Post-extubation respiratory support:**
- **High-flow nasal cannula:** Reduces reintubation vs conventional oxygen
- **NIV:** Prevents reintubation in COPD, hypercapnic patients
- **Avoid NIV** in hypoxemic respiratory failure (delayed reintubation increases mortality)

**Tracheostomy timing:**
- **Early (≤7 days):** No clear mortality benefit
- **Consider for:** Prolonged ventilation expected >14 days, difficult wean, airway protection
- **Percutaneous vs surgical:** Similar outcomes

## Palliative Ventilation

**Withholding/withdrawing ventilation:**
- Ethical in terminal illness, poor prognosis
- Discuss with patient/family early
- Establish goals of care
- Comfort-focused measures when appropriate

**Non-invasive ventilation for comfort:**
- Dyspnea relief in palliative care
- Allows patient interaction
- Can be used at home

## Quality Improvement

**Ventilator-associated events (VAEs):**
- Ventilator-associated condition (VAC)
- Infection-related ventilator-associated complication (IVAC)
- Possible ventilator-associated pneumonia (PVAP)
- Surveillance and prevention bundles reduce VAEs

**Spontaneous awakening trials (SATs):**
- Daily sedation interruption
- Reduces ventilation duration
- Requires protocolized approach

**Spontaneous breathing trials (SBTs):**
- Daily assessment for weaning readiness
- Reduces duration of ventilation
- Coordinate with SATs (ABC bundle)

**ABC bundle:**
- **A**ssess readiness daily
- **B**reathing trial (SBT) daily
- **C**hoice of sedation
- **D**elirium monitoring
- **E**arly mobilization and exercise

**Mobility in mechanically ventilated patients:**
- Reduces ICU-acquired weakness
- Improves functional outcomes
- Requires coordinated team effort`,
      keyTerms: [
        { term: 'EAdi', definition: 'Electrical activity of the diaphragm; measured by special catheter to guide ventilator support in NAVA mode' },
        { term: 'NAVA', definition: 'Neurally Adjusted Ventilatory Assist; ventilator mode that delivers support proportional to diaphragmatic electrical activity' },
        { term: 'transpulmonary pressure', definition: 'Pressure difference between alveoli and pleural space; better reflects lung stress than airway pressure alone' },
        { term: 'EOLIA', definition: 'ECMO to Save Lung Injury in Severe ARDS; trial comparing early ECMO to conventional management in ARDS' },
        { term: 'CICO', definition: 'Can\'t Intubate, Can\'t Oxygenate; emergency situation requiring immediate surgical airway' },
        { term: 'VAE', definition: 'Ventilator-Associated Events; surveillance definition for complications of mechanical ventilation' },
      ],
      analogies: [
        'NAVA is like power steering for the ventilator - the patient tells the machine exactly how much help they need at each moment.',
        'The EOLIA trial was like comparing a parachute to a safety net - both can save you, but the parachute (ECMO) might work better in certain falls.',
        'Transpulmonary pressure is like the pressure difference across a balloon wall - it\'s what\'s actually stretching the lung, not just what\'s in the airway.',
      ],
      clinicalNotes: `Expert clinical pearls for respiratory failure management:

1. **ARDS management:** Lung-protective ventilation is foundational. Consider early paralysis (first 48h) for PaO2/FiO2 <150. Prone for moderate-severe ARDS.

2. **Difficult airway anticipation:** Use LEMON assessment. Have backup plan. If you think it might be difficult, it probably will be. Consider awake intubation.

3. **Asthma ventilation:** If you must intubate, use low respiratory rate, long expiratory time (I:E 1:4 or 1:5), permissive hypercapnia. Auto-PEEP is the enemy.

4. **COPD exacerbation:** Try NIV first. Target SpO2 88-92%. Intubate early if NIV failing (pH dropping, mental status worsening).

5. **Extubation failure:** Patients with weak cough, thick secretions, or more than 7 days of ventilation are high risk. Consider HFNC or NIV post-extubation.

6. **ECMO consideration:** Not for everyone. Best for reversible respiratory failure, young patients, <7 days of ventilation. Requires specialized center.

7. **Diaphragm ultrasound:** Can predict extubation success. Thickening fraction >30% during inspiration suggests good diaphragm function.

8. **Steroids in ARDS:** Dexamethasone protocol (20 mg daily x5 days, then 10 mg daily x5 days) showed mortality benefit in DEXA-ARDS trial.

9. **Cuff leak test:** Absent cuff leak (<110 mL) predicts post-extubation stridor. Consider steroids if high risk.

10. **Goals of care:** Prolonged ventilation isn\'t always the right choice. Have honest discussions about prognosis and quality of life early.`,
    },
  },

  media: [
    {
      id: 'respiratory-failure-types',
      type: 'diagram',
      filename: 'respiratory-failure-types.svg',
      title: 'Types of Respiratory Failure',
      description: 'Comparison of Type I and Type II respiratory failure with causes and ABG patterns',
    },
    {
      id: 'intubation-rsi',
      type: 'diagram',
      filename: 'intubation-rsi.svg',
      title: 'Rapid Sequence Intubation',
      description: 'Step-by-step diagram of RSI process with medications and timing',
    },
    {
      id: 'ventilator-modes',
      type: 'diagram',
      filename: 'ventilator-modes.svg',
      title: 'Ventilator Modes Comparison',
      description: 'Comparison of AC/VC, AC/PC, SIMV, PSV, and APRV modes',
    },
    {
      id: 'difficult-airway-algorithm',
      type: 'diagram',
      filename: 'difficult-airway-algorithm.svg',
      title: 'Difficult Airway Algorithm',
      description: 'ASA difficult airway algorithm flowchart',
    },
  ],

  citations: [
    {
      id: 'ards-definition-2012',
      type: 'article',
      title: 'The Berlin Definition of ARDS',
      authors: ['ARDS Definition Task Force', 'et al.'],
      source: 'JAMA',
      url: 'https://jamanetwork.com/journals/jama/fullarticle/2672838',
      accessedDate: '2026-01-26',
    },
    {
      id: 'ardsnet-2000',
      type: 'article',
      title: 'Ventilation with Lower Tidal Volumes as Compared with Traditional Tidal Volumes for Acute Lung Injury',
      authors: ['Acute Respiratory Distress Syndrome Network', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJM2000005343320601',
      accessedDate: '2026-01-26',
    },
    {
      id: 'proseva-trial',
      type: 'article',
      title: 'Prone Positioning in Severe ARDS',
      authors: ['Guérin, C.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1304339',
      accessedDate: '2026-01-26',
    },
    {
      id: 'eolia-trial',
      type: 'article',
      title: 'ECMO for Severe ARDS',
      authors: ['Combes, A.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1801738',
      accessedDate: '2026-01-26',
    },
    {
      id: 'dexamethasone-ards',
      type: 'article',
      title: 'Dexamethasone Treatment for ARDS',
      authors: ['Villar, J.', 'et al.'],
      source: 'Lancet Respiratory Medicine',
      url: 'https://www.thelancet.com/journals/lanres/article/PIIS2213-2600(20)30283-0',
      accessedDate: '2026-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Cardiac Arrest' },
    { targetId: 'emergency-shock', targetType: 'condition', relationship: 'related', label: 'Shock Types' },
    { targetId: 'specialties-cardiology-ecg-interpretation', targetType: 'topic', relationship: 'related', label: 'ECG Interpretation' },
  ],

  tags: {
    systems: ['respiratory', 'cardiovascular'],
    topics: ['emergency medicine', 'critical care', 'pulmonology', 'intubation', 'ventilation'],
    keywords: ['respiratory distress', 'respiratory failure', 'ARDS', 'intubation', 'mechanical ventilation', 'oxygenation', 'hypoxia', 'asthma', 'COPD'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'internal medicine', 'pulmonology', 'critical care'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default respiratoryDistress;
