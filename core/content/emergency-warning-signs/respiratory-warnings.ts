/**
 * Respiratory Warning Signs - Dyspnea, Stridor, Cyanosis, Respiratory Distress
 *
 * Educational content for recognizing respiratory emergencies including acute
 * dyspnea, upper airway obstruction, cyanosis, and signs of respiratory failure.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical advice. In any emergency, call 911 immediately.
 *
 * Spanish translations (Traduccion al espanol) included at each level.
 */

import { EducationalContent } from '../types';

export const respiratoryWarnings: EducationalContent = {
  id: 'emergency-respiratory-warning-signs',
  type: 'condition',
  name: 'Respiratory Warning Signs',
  alternateNames: [
    'Breathing Emergency Signs',
    'Senales de Advertencia Respiratoria',
    'Respiratory Red Flags',
    'Signs of Breathing Difficulty',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Trouble breathing is one of the scariest emergencies. Knowing the signs of a breathing emergency -- like gasping for air, blue lips, or noisy breathing -- can help you save a life.',
      explanation: `## Warning Signs of a Breathing Emergency

Breathing is something your body does automatically, about 15-20 times every minute. When something goes wrong with breathing, it can become an emergency very quickly.

**Traduccion al espanol:** Los problemas para respirar pueden ser una emergencia. Conocer las senales de advertencia puede salvar una vida.

---

## 1. Trouble Breathing (Dificultad para Respirar)

**Normal breathing** is quiet, easy, and you do not have to think about it.

**Warning signs that breathing is an emergency:**
- You cannot catch your breath or feel like you are suffocating
- Breathing is much faster than normal
- You have to sit up straight or lean forward to breathe
- You cannot speak in full sentences because you are too breathless
- Your nostrils flare wide with each breath
- You can see the skin pulling in between the ribs with each breath

---

## 2. Noisy Breathing (Respiracion Ruidosa)

**Stridor** is a high-pitched whistling or squeaking sound when breathing IN. This means something is blocking the upper airway (throat area).

**Wheezing** is a whistling sound when breathing OUT. This often means the airways in the lungs are tight (like in asthma).

**When noisy breathing is an emergency:**
- The sound is getting louder or worse
- The person is struggling to breathe
- The person cannot speak or swallow
- It started suddenly (could be choking or allergic reaction)

---

## 3. Blue Skin or Lips (Piel o Labios Azules / Cianosis)

When skin, lips, or fingernails turn blue or gray, it means the body is not getting enough oxygen. This is always a serious warning sign.

**Where to look:**
- Lips and around the mouth
- Fingernails and toenails
- Earlobes
- Tongue

**Note:** In people with darker skin, look at the lips, gums, nail beds, and palms of hands. The color may appear gray or ashen rather than blue.

---

## 4. Signs of a Severe Breathing Emergency

**Call 911 immediately if someone:**
- Cannot breathe at all or is gasping
- Has blue or gray lips/skin
- Is choking and cannot cough or speak
- Is breathing very fast and getting worse
- Is confused or very drowsy because of breathing problems
- Collapses because they cannot breathe
- Is having a severe allergic reaction (swollen face/throat, hives, trouble breathing)

---

## Common Causes of Breathing Emergencies

- **Asthma attack** -- airways tighten and swell
- **Allergic reaction (anaphylaxis)** -- throat swells, airways close
- **Choking** -- food or object blocks the airway
- **Pneumonia** -- infection fills the lungs with fluid
- **COPD flare-up** -- chronic lung disease gets worse
- **Heart failure** -- fluid backs up into the lungs

---

## What You Can Do

1. **Call 911** -- do not wait
2. **Help the person sit upright** -- this makes breathing easier
3. **Use their inhaler** if they have one (for asthma)
4. **Use their EpiPen** if they have one (for severe allergic reaction)
5. **Perform the Heimlich maneuver** if they are choking
6. **Stay calm** and keep them calm -- panic makes breathing harder

**In Spanish:** Llame al 911 inmediatamente si alguien tiene dificultad severa para respirar.`,
      keyTerms: [
        {
          term: 'dyspnea',
          definition: 'The medical word for difficulty breathing or feeling short of breath.',
          pronunciation: 'DISP-nee-ah',
        },
        {
          term: 'stridor',
          definition: 'A high-pitched whistling or squeaking sound when breathing in, caused by a blockage in the throat or upper airway.',
          pronunciation: 'STRY-dor',
        },
        {
          term: 'cyanosis',
          definition: 'A blue or gray color of the skin, lips, or fingernails caused by not enough oxygen in the blood.',
          pronunciation: 'sy-ah-NO-sis',
        },
        {
          term: 'wheezing',
          definition: 'A whistling sound when breathing out, often caused by narrowed airways (like in asthma).',
        },
        {
          term: 'anaphylaxis',
          definition: 'A severe, life-threatening allergic reaction that can cause throat swelling, trouble breathing, and shock.',
          pronunciation: 'an-ah-fih-LAK-sis',
        },
      ],
      analogies: [
        'Your airways are like a straw. Stridor is like trying to drink through a straw that is being pinched at the top. Wheezing is like a straw being squeezed in the middle.',
        'Cyanosis (blue skin) is like a warning light telling you the oxygen tank is running low.',
        'An asthma attack is like the hallways in your lungs getting narrower -- air can still get through, but it takes much more effort.',
        'Anaphylaxis is like an alarm system that goes haywire and starts shutting everything down at once.',
      ],
      examples: [
        'A child at a birthday party suddenly starts coughing and cannot speak. Her face turns red. A parent performs the Heimlich maneuver and a piece of hot dog pops out.',
        'A man with asthma feels his chest getting tight after mowing the lawn. He uses his rescue inhaler, but 15 minutes later he still cannot speak in full sentences. His wife calls 911.',
        'A woman at a restaurant eats shrimp and her lips start swelling. She develops hives and her voice becomes hoarse. She uses her EpiPen and someone calls 911.',
      ],
      patientCounselingPoints: [
        'If you have asthma, always carry your rescue inhaler with you',
        'If you have severe allergies, always carry your EpiPen and wear a medical alert bracelet',
        'Learn the Heimlich maneuver -- it can save someone who is choking',
        'Blue or gray lips are always an emergency -- call 911',
        'Si tiene asma, siempre lleve su inhalador de rescate consigo',
      ],
    },

    2: {
      level: 2,
      summary:
        'Respiratory emergencies include acute dyspnea, upper airway obstruction (stridor), cyanosis, and respiratory failure. Recognizing the pattern of breathing difficulty helps identify the cause and urgency.',
      explanation: `## Respiratory Warning Signs: Recognition and Response

Respiratory emergencies are among the most time-sensitive conditions in medicine. Understanding the key warning signs and their patterns helps identify the cause and guide appropriate response.

**Traduccion:** Las emergencias respiratorias incluyen disnea aguda, obstruccion de la via aerea superior, cianosis e insuficiencia respiratoria.

---

## Dyspnea (Difficulty Breathing)

**Acute vs. Chronic:**
- **Acute dyspnea** (minutes to hours): Potential emergency -- asthma, PE, pneumothorax, heart failure, anaphylaxis
- **Chronic dyspnea** (weeks to months): Usually gradual -- COPD, interstitial lung disease, deconditioning
- **Acute-on-chronic:** Worsening of a known condition -- COPD exacerbation, heart failure decompensation

**Assessment of severity:**
| Sign | Mild | Moderate | Severe | Life-Threatening |
|------|------|----------|--------|-----------------|
| Speech | Full sentences | Phrases only | Single words | Unable to speak |
| Respiratory rate | 20-24 | 25-30 | >30 | Irregular/slow |
| Accessory muscles | No | Some | Yes | Paradoxical breathing |
| Mental status | Alert | Anxious | Agitated | Drowsy/confused |
| Oxygen saturation | >94% | 90-94% | <90% | <85% |

**Tripod position:** Sitting upright, leaning forward, hands on knees. This position maximizes diaphragm function and indicates significant respiratory distress.

---

## Stridor: Upper Airway Obstruction

**Stridor is always concerning and often an emergency.**

**Characteristics:**
- High-pitched, harsh, inspiratory sound
- Indicates narrowing of the upper airway (above the vocal cords)
- Audible without a stethoscope when severe

**Causes by age group:**

| Children | Adults |
|----------|--------|
| Croup (viral laryngotracheitis) | Anaphylaxis |
| Foreign body aspiration | Foreign body |
| Epiglottitis (rare now due to Hib vaccine) | Epiglottitis |
| Peritonsillar abscess | Angioedema (ACE inhibitor, hereditary) |
| Laryngomalacia (infants) | Laryngeal tumor or trauma |

**Emergency stridor signs:**
- Rapidly worsening
- Drooling (unable to swallow secretions)
- "Hot potato" or muffled voice
- Tripod or sniffing position
- Cyanosis

---

## Cyanosis: Oxygen Deprivation Warning

**Central cyanosis** (lips, tongue, mucous membranes):
- Indicates systemic hypoxemia (low blood oxygen)
- Typically appears when SpO2 <85% or PaO2 <60 mmHg
- Always an emergency

**Peripheral cyanosis** (fingers, toes, earlobes):
- May indicate poor circulation rather than low oxygen
- Causes: cold exposure, peripheral vascular disease, Raynaud's
- Less urgently dangerous, but evaluate for underlying cause

**Important note on skin color:**
- Central cyanosis can be detected in all skin tones
- In darker skin: Check oral mucosa, conjunctivae, nail beds, palms/soles
- Color may appear gray, ashen, or dusky rather than blue
- Pulse oximetry may overestimate SpO2 in darkly pigmented skin

---

## Respiratory Distress vs. Respiratory Failure

**Respiratory distress** (the body is compensating):
- Tachypnea (fast breathing)
- Accessory muscle use (neck, chest wall muscles)
- Nasal flaring
- Intercostal retractions (skin pulling between ribs)
- Anxiety, agitation
- Patient is fighting to breathe

**Respiratory failure** (the body is failing to compensate):
- Decreasing respiratory effort (getting tired)
- Bradypnea (slow, irregular breathing)
- Altered mental status, confusion, drowsiness
- Central cyanosis
- Silent chest (no air movement on auscultation)

**Respiratory failure is MORE dangerous than distress** -- the quiet patient who was struggling but is now calm and drowsy may be about to stop breathing.

---

## When to Call 911

**Call 911 immediately for:**
- Stridor that is worsening or causing distress
- Central cyanosis (blue/gray lips or tongue)
- Inability to speak more than single words due to breathlessness
- Signs of respiratory failure (decreasing effort, confusion)
- Suspected anaphylaxis (swelling, hives, breathing difficulty)
- Choking with inability to cough, speak, or breathe
- New-onset severe dyspnea at rest
- Known asthmatic with severe attack not responding to inhaler

**Go to ER for:**
- Moderate dyspnea with known lung disease
- Mild stridor with stable appearance
- Peripheral cyanosis with cold extremities
- Persistent wheezing after inhaler use`,
      keyTerms: [
        {
          term: 'respiratory distress',
          definition: 'The body working harder than normal to breathe. Signs include fast breathing, use of neck/chest muscles, nasal flaring, and anxiety.',
        },
        {
          term: 'respiratory failure',
          definition: 'When the body can no longer maintain adequate oxygen or remove carbon dioxide. The patient may become quiet, confused, and drowsy -- this is more dangerous than respiratory distress.',
        },
        {
          term: 'accessory muscles',
          definition: 'Muscles in the neck (sternocleidomastoid) and chest wall that are used when normal breathing muscles cannot provide enough airflow.',
        },
        {
          term: 'central cyanosis',
          definition: 'Blue/gray discoloration of the lips, tongue, and mucous membranes indicating low blood oxygen. Appears when SpO2 drops below approximately 85%.',
        },
        {
          term: 'anaphylaxis',
          definition: 'A severe, rapidly progressive allergic reaction affecting multiple body systems. Can cause airway swelling (stridor), bronchospasm (wheezing), hypotension, and death if untreated.',
          pronunciation: 'an-ah-fih-LAK-sis',
        },
        {
          term: 'tripod position',
          definition: 'Sitting upright, leaning forward with hands on knees or bed. Maximizes diaphragm function and indicates significant breathing difficulty.',
        },
      ],
      analogies: [
        'Respiratory distress is like a car engine revving hard to climb a steep hill -- it is working overtime but still moving. Respiratory failure is when the engine starts sputtering and stalling.',
        'Stridor is like the sound of air being forced through a narrow pipe -- the narrower the pipe, the louder and higher the sound.',
        'Central cyanosis is like the warning light that comes on when your phone battery drops below 5% -- the body is running dangerously low on oxygen.',
        'The transition from distress to failure is like a swimmer who stops splashing and goes quiet -- silence is the most dangerous sign.',
      ],
      examples: [
        'A 3-year-old wakes at night with a barking cough and high-pitched sound when breathing in. He is calm and playful. Diagnosis: croup. Parents are instructed on cool mist and when to return.',
        'A 55-year-old with COPD has been getting more short of breath over two days. He can now only speak in two-word phrases and is using neck muscles to breathe. His daughter calls 911.',
        'A 25-year-old woman stung by a bee develops facial swelling, hives, and wheezing within minutes. Her friend administers her EpiPen and calls 911.',
      ],
      patientCounselingPoints: [
        'A patient who was struggling to breathe but suddenly becomes quiet and calm may actually be getting worse, not better',
        'Blue or gray lips are an emergency regardless of other symptoms',
        'If you use a rescue inhaler and do not feel better within 15-20 minutes, seek emergency care',
        'People with severe allergies should have two EpiPens and know how to use them',
        'Un paciente que estaba luchando por respirar pero de repente se calma puede estar empeorando, no mejorando',
      ],
    },

    3: {
      level: 3,
      summary:
        'Respiratory emergencies require systematic assessment of airway patency, breathing mechanics, gas exchange, and hemodynamic impact. Key warning signs include acute stridor, refractory hypoxemia, respiratory muscle fatigue, and signs of impending respiratory arrest.',
      explanation: `## Respiratory Warning Signs: Clinical Assessment Framework

Respiratory emergencies demand rapid, systematic evaluation. The progression from compensated respiratory distress to decompensated respiratory failure can occur rapidly and unpredictably.

**Traduccion:** Las emergencias respiratorias requieren evaluacion sistematica de la permeabilidad de la via aerea, mecanica ventilatoria, intercambio gaseoso e impacto hemodinamico.

---

## Acute Dyspnea: Systematic Differential

### By onset and pattern:

**Sudden onset (seconds to minutes):**
- Pneumothorax (chest pain, unilateral absent breath sounds)
- Pulmonary embolism (pleuritic pain, tachycardia, hypoxia)
- Anaphylaxis (urticaria, angioedema, hypotension)
- Foreign body aspiration (witnessed event, unilateral wheezing)
- Flash pulmonary edema (hypertensive crisis, acute MR)
- Cardiac tamponade (JVD, muffled sounds, hypotension)

**Rapid onset (minutes to hours):**
- Acute asthma exacerbation
- COPD exacerbation
- Pneumonia
- Acute heart failure
- Metabolic acidosis (Kussmaul breathing -- DKA, sepsis)

**Subacute onset (hours to days):**
- Pleural effusion
- Pneumonia progression
- Heart failure decompensation
- ARDS evolution

### Key discriminating features:

| Diagnosis | Key Features | Initial Workup |
|-----------|-------------|----------------|
| PE | Tachycardia, pleuritic pain, DVT risk factors, clear lungs | CT-PA, D-dimer, Wells score |
| Pneumothorax | Sudden pleuritic pain, decreased breath sounds unilaterally | CXR (upright), ultrasound |
| Asthma | Wheezing, history, triggers, responds to bronchodilators | Peak flow, CXR if first presentation |
| CHF | Orthopnea, PND, bilateral crackles, peripheral edema, JVD | CXR, BNP/NT-proBNP, echo |
| COPD | Smoking history, barrel chest, prolonged expiration | ABG, CXR, prior PFTs |
| Anaphylaxis | Exposure, urticaria, angioedema, wheezing, hypotension | Clinical diagnosis, tryptase |

---

## Stridor: Upper Airway Emergency Assessment

### Classification by location:

**Inspiratory stridor:** Supraglottic or glottic obstruction
- Epiglottitis, peritonsillar abscess, angioedema, tumor

**Biphasic stridor (inspiratory + expiratory):** Subglottic or tracheal
- Croup, subglottic stenosis, tracheal mass, foreign body

**Expiratory stridor / wheeze:** Lower airway
- Asthma, bronchiolitis, foreign body in bronchus

### Management approach:

**Airway emergency -- prepare for difficult airway if:**
- Stridor at rest
- Drooling / inability to swallow
- Muffled "hot potato" voice
- Rapid progression
- Prior difficult intubation
- Neck swelling or hematoma

**Critical principle:** Avoid agitating the patient. In children with suspected epiglottitis or severe croup, let the child remain in a position of comfort. Do NOT examine the throat with a tongue depressor -- this can precipitate complete obstruction.

### Specific conditions:

**Angioedema (ACE inhibitor-related):**
- Occurs in 0.1-0.7% of patients on ACE inhibitors
- Can occur years after starting the medication
- Bradykinin-mediated (NOT histamine) -- epinephrine and antihistamines have limited effect
- Treatment: Icatibant (bradykinin B2 antagonist), C1-INH concentrate, or fresh frozen plasma
- Airway management: Early intubation if progressive; may require surgical airway

**Hereditary angioedema (HAE):**
- C1-esterase inhibitor deficiency
- Recurrent episodes of angioedema without urticaria
- Treatment: C1-INH concentrate, icatibant, ecallantide
- Prophylaxis: Lanadelumab, C1-INH, or androgens

---

## Cyanosis: Pathophysiology and Assessment

### Central cyanosis requires ~5 g/dL of deoxyhemoglobin:
- At normal hemoglobin (15 g/dL): Appears at SpO2 ~85%
- At low hemoglobin (anemia, 8 g/dL): May NOT appear even with severe hypoxemia
- At high hemoglobin (polycythemia): Appears at higher SpO2 values

### Causes of cyanosis refractory to supplemental oxygen:

| Category | Examples | Key Clue |
|----------|----------|----------|
| Right-to-left shunt | Intracardiac shunt, pulmonary AVM, ARDS | PaO2 does not improve with 100% O2 |
| Methemoglobinemia | Dapsone, nitrates, benzocaine, genetic | SpO2 reads ~85%, chocolate-brown blood |
| Sulfhemoglobinemia | Sulfonamides, metoclopramide | Rare, irreversible, greenish blood |

**Methemoglobinemia recognition:**
- Pulse oximetry reads ~85% and does not change with oxygen
- ABG shows normal PaO2 but low SaO2 (saturation gap)
- Blood appears chocolate brown and does not turn red with oxygen exposure
- Treatment: Methylene blue 1-2 mg/kg IV

---

## Signs of Impending Respiratory Arrest

**The transition from distress to failure -- critical warning signs:**

1. **Decreasing respiratory effort** in a patient who was previously working hard
2. **Bradypnea** (respiratory rate dropping below normal)
3. **Paradoxical breathing** (abdomen moves out while chest moves in)
4. **Silent chest** on auscultation (no wheezing in a severe asthmatic = critical)
5. **Altered mental status** -- confusion, lethargy, somnolence
6. **Diaphoresis** with respiratory effort
7. **Inability to maintain upright position** (falling back in bed)
8. **Monosyllabic speech** progressing to inability to speak

**ABG patterns suggesting impending failure:**
- Type 1: PaO2 <60 mmHg on supplemental O2 (hypoxemic failure)
- Type 2: PaCO2 >50 mmHg with pH <7.35 (hypercapnic failure)
- Normalization of PaCO2 in acute asthma (should be LOW due to hyperventilation -- normal means fatigue)

---

## Rapid Assessment Tools

### ROX Index (for high-flow nasal cannula patients):
- ROX = (SpO2/FiO2) / Respiratory Rate
- ROX <2.85 at 2h: High risk of HFNC failure -> Consider intubation
- ROX >4.88 at 12h: Low risk of failure -> Continue HFNC

### CURB-65 (pneumonia severity):
- Confusion, Urea >7 mmol/L, RR >=30, BP <90/60, age >=65
- Score >=3: Consider ICU admission

### Modified Borg Dyspnea Scale (patient-reported):
- 0 = nothing at all, 10 = maximal
- Useful for tracking response to treatment
- Score >=7 indicates severe dyspnea`,
      keyTerms: [
        {
          term: 'refractory hypoxemia',
          definition: 'Low blood oxygen that does not improve with supplemental oxygen. Indicates right-to-left shunting (intracardiac, intrapulmonary) or abnormal hemoglobin (methemoglobinemia).',
        },
        {
          term: 'paradoxical breathing',
          definition: 'Inward movement of the abdomen during inspiration (opposite of normal). Indicates diaphragm fatigue and impending respiratory failure.',
        },
        {
          term: 'methemoglobinemia',
          definition: 'Condition where hemoglobin is oxidized to methemoglobin, which cannot carry oxygen. Causes cyanosis refractory to O2, SpO2 plateaus at ~85%, chocolate-brown blood.',
          pronunciation: 'met-hee-mo-glo-bin-EE-mee-ah',
        },
        {
          term: 'angioedema',
          definition: 'Swelling of deep dermis, subcutaneous, or submucosal tissue. Airway angioedema causes stridor and can be life-threatening. May be histamine-mediated (allergic) or bradykinin-mediated (ACE inhibitor, hereditary).',
          pronunciation: 'an-jee-oh-eh-DEE-mah',
        },
        {
          term: 'silent chest',
          definition: 'Absence of breath sounds and wheezing on auscultation in a patient with severe bronchospasm. Indicates critically low airflow and imminent respiratory arrest.',
        },
        {
          term: 'ROX index',
          definition: 'Ratio of (SpO2/FiO2) to respiratory rate. Used to predict failure of high-flow nasal cannula therapy. ROX <2.85 at 2 hours suggests need for escalation to intubation.',
        },
      ],
      analogies: [
        'Methemoglobinemia is like having a fleet of delivery trucks (hemoglobin) whose doors are jammed shut -- they can drive around, but they cannot pick up or deliver any packages (oxygen).',
        'A silent chest in severe asthma is like a fire alarm that stops ringing not because the fire is out, but because the battery died -- the absence of wheezing means almost no air is moving.',
        'The ROX index is like a fuel gauge for breathing support -- it tells you if the current level of help is enough or if you need to upgrade to a more powerful system.',
        'Paradoxical breathing is like a see-saw going the wrong way -- it means the breathing muscles have exhausted themselves and the system is breaking down.',
      ],
      examples: [
        'A 68-year-old woman on lisinopril for 3 years presents with progressive lip and tongue swelling over 2 hours. Epinephrine and diphenhydramine are given but swelling continues. ACE inhibitor angioedema is recognized; icatibant is administered and swelling resolves.',
        'A 22-year-old man with severe asthma is brought to the ED wheezing loudly. After 3 nebulizer treatments, the wheezing stops but he is now quiet, sleepy, and breathing slowly. ABG shows PaCO2 55 mmHg. Intubation is performed for impending respiratory arrest.',
        'A 40-year-old woman presents with cyanosis and SpO2 of 85% that does not improve with 100% O2. Blood drawn appears chocolate brown. Methemoglobin level is 35%. Methylene blue is administered and SpO2 improves to 98% within 15 minutes.',
      ],
      clinicalNotes: `**Clinical pearls for respiratory warning signs:**

1. **A quiet asthmatic is a dying asthmatic.** If wheezing disappears in a patient who is not clinically improving, this indicates critically low airflow, not resolution.

2. **Normal PaCO2 in acute asthma is abnormal.** Acute asthma should cause hyperventilation (low PaCO2). A "normal" PaCO2 of 40 mmHg means the patient is tiring and may need intubation.

3. **ACE inhibitor angioedema is bradykinin-mediated.** Epinephrine, steroids, and antihistamines have minimal effect. Definitive treatment requires bradykinin pathway blockade (icatibant, C1-INH).

4. **Pulse oximetry has limitations.** It overestimates SpO2 in darkly pigmented skin, reads falsely ~85% in methemoglobinemia, and can be inaccurate with poor perfusion, motion, or nail polish.

5. **In Spanish-speaking patients,** respiratory distress may be described as "no puedo respirar" (I can't breathe), "me falta el aire" (I'm missing air), or "me ahogo" (I'm drowning/suffocating).`,
    },

    4: {
      level: 4,
      summary:
        'Advanced respiratory emergency evaluation integrates arterial blood gas interpretation, ventilation-perfusion physiology, advanced imaging, point-of-care ultrasound, and evidence-based ventilation strategies to manage the spectrum from acute upper airway obstruction to ARDS.',
      explanation: `## Advanced Respiratory Emergency Evaluation

### ABG Interpretation in Respiratory Emergencies

**Systematic ABG approach (5-step method):**
1. pH: Acidemia (<7.35) or alkalemia (>7.45)?
2. PaCO2: Respiratory component (normal 35-45 mmHg)
3. HCO3: Metabolic component (normal 22-26 mEq/L)
4. Primary disorder: Which component explains the pH change?
5. Compensation: Is compensation appropriate?

**Key ABG patterns in respiratory emergencies:**

| Pattern | pH | PaCO2 | PaO2 | Diagnosis |
|---------|-----|-------|------|-----------|
| Acute respiratory alkalosis | >7.45 | <35 | Variable | Hyperventilation, PE, early asthma |
| Acute respiratory acidosis | <7.35 | >45 | Low | Respiratory failure, COPD, overdose |
| Mixed metabolic acidosis + respiratory alkalosis | <7.40 | <35 | Variable | Sepsis, salicylate toxicity |
| Normal pH, high PaCO2 | 7.35-7.45 | >45 | Variable | Chronic CO2 retention (compensated COPD) |

**A-a gradient calculation:**
- A-a = PAO2 - PaO2
- PAO2 = (FiO2 x (Patm - PH2O)) - (PaCO2 / 0.8)
- At room air, sea level: PAO2 = (0.21 x 713) - (PaCO2 / 0.8)
- Normal A-a gradient: 5-15 mmHg (increases with age: expected = 2.5 + (0.21 x age))

**Elevated A-a gradient:** V/Q mismatch, shunt, diffusion impairment
**Normal A-a gradient with hypoxemia:** Hypoventilation, low FiO2 (altitude)

---

### Ventilation-Perfusion Physiology in Emergencies

**Shunt physiology (V/Q = 0):**
- Blood passes through lung without gas exchange
- Causes: ARDS, pneumonia (consolidated lung), atelectasis, intracardiac shunt
- Key feature: Hypoxemia does NOT correct with supplemental O2
- Quantification: Shunt fraction (Qs/Qt) using 100% FiO2 method

**Dead space physiology (V/Q = infinity):**
- Ventilation without perfusion
- Causes: PE, low cardiac output, overdistension
- Key feature: Increased PaCO2-ETCO2 gradient
- Quantification: Bohr equation, VD/VT ratio

**Clinical application:**
- Post-intubation: If ETCO2 is much lower than PaCO2, consider PE or low cardiac output
- In ARDS: Increasing PEEP recruits shunting alveoli but may increase dead space if overdistended
- In PE: Hypoxemia + hypocapnia (hyperventilation) + elevated A-a gradient = classic triad

---

### Point-of-Care Lung Ultrasound (POCUS)

**BLUE protocol (Bedside Lung Ultrasound in Emergency):**

| Profile | Findings | Diagnosis |
|---------|----------|-----------|
| A-profile + DVT | A-lines, no lung sliding abnormality, positive DVT | Pulmonary embolism |
| A-profile + PLAPS | A-lines + posterior-lateral alveolar/pleural syndrome | Pneumonia |
| B-profile | Bilateral B-lines (lung rockets) | Pulmonary edema |
| A/B-profile | Asymmetric B-lines | Pneumonia |
| Absent lung sliding + A-lines + lung point | Barcode sign, stratosphere sign | Pneumothorax |
| C-profile | Subpleural consolidation, tissue-like pattern | Pneumonia / atelectasis |

**Key ultrasound signs:**
- **A-lines:** Horizontal hyperechoic lines (normal, or air trapping)
- **B-lines:** Vertical laser-like artifacts from pleural line to bottom of screen (fluid in interstitium)
- **Lung sliding:** Shimmering at pleural line with respiration (absence suggests pneumothorax)
- **Lung point:** Transition point between sliding and absent sliding (diagnostic of pneumothorax)

**Diaphragm ultrasound:**
- Thickness ratio (inspiration/expiration) >1.2: Adequate diaphragm function
- Diaphragm excursion <10mm: Diaphragm weakness (consider as cause of dyspnea)
- Paradoxical movement: Diaphragm paralysis

---

### Advanced Airway Management in Respiratory Emergencies

**Difficult airway predictors:**
- **LEMON:** Look (habitus), Evaluate (3-3-2 rule), Mallampati, Obstruction, Neck mobility
- **MOANS (difficult BVM):** Mask seal, Obesity, Age >55, No teeth, Stiff lungs
- **RODS (difficult supraglottic airway):** Restricted opening, Obstruction, Distorted anatomy, Stiff lungs

**Rapid sequence intubation (RSI) for respiratory failure:**
- Preoxygenation: 3 min 100% O2, nasal cannula 15 L/min during attempt (apneic oxygenation)
- Induction: Ketamine 1-2 mg/kg (preserves respiratory drive) or Propofol 1-1.5 mg/kg
- Paralysis: Succinylcholine 1.5 mg/kg or Rocuronium 1.2 mg/kg
- Confirmation: Waveform capnography (gold standard)

**Post-intubation management pitfalls:**
- Immediate hypotension after intubation: Consider tension pneumothorax (especially in asthma/COPD), auto-PEEP, reduced preload from positive pressure
- Auto-PEEP management: Reduce respiratory rate, increase expiratory time, disconnect briefly if hemodynamically unstable
- ARDS ventilation: Low tidal volume (6 mL/kg IBW), plateau pressure <30 cmH2O, FiO2/PEEP per ARDSNet table

---

### Specific Respiratory Emergencies: Advanced Management

**Tension pneumothorax:**
- Clinical diagnosis: Do NOT delay for CXR
- Tracheal deviation (late sign), JVD, absent breath sounds, hypotension, tachycardia
- Needle decompression: 2nd intercostal space, midclavicular line (or 4th-5th ICS, anterior axillary line)
- Definitive: Tube thoracostomy (chest tube)

**Massive hemoptysis (>600 mL/24h or >100 mL/hr):**
- ABCs: Protect airway, position bleeding side DOWN
- Selective bronchial intubation to isolate bleeding lung
- Bronchoscopy for localization
- Bronchial artery embolization (interventional radiology)
- Surgery if embolization fails

**Status asthmaticus refractory to standard therapy:**
- Continuous nebulization: Albuterol 10-15 mg/hr
- IV magnesium: 2g over 20 minutes
- IV terbutaline or epinephrine (subcutaneous)
- Non-invasive ventilation (BiPAP): Bridge to avoid intubation
- Ketamine infusion: Bronchodilatory properties
- Heliox (helium-oxygen mixture): Reduces turbulent airflow
- Intubation as last resort (high complication rate in severe asthma)

**ARDS recognition (Berlin criteria):**
- Timing: Within 1 week of clinical insult
- Imaging: Bilateral opacities not fully explained by effusions/atelectasis
- Origin: Not fully explained by cardiac failure or fluid overload
- Oxygenation: PaO2/FiO2 ratio on PEEP >=5 cmH2O
  - Mild: 200-300
  - Moderate: 100-200
  - Severe: <100`,
      keyTerms: [
        {
          term: 'A-a gradient',
          definition: 'Alveolar-arterial oxygen gradient. Calculated difference between alveolar O2 (PAO2) and arterial O2 (PaO2). Elevated gradient indicates V/Q mismatch, shunt, or diffusion impairment.',
        },
        {
          term: 'BLUE protocol',
          definition: 'Bedside Lung Ultrasound in Emergency. Systematic POCUS approach for acute dyspnea using lung artifact patterns (A-lines, B-lines, lung sliding) to differentiate causes with >90% accuracy.',
        },
        {
          term: 'auto-PEEP',
          definition: 'Intrinsic positive end-expiratory pressure caused by incomplete exhalation (air trapping). Common in asthma/COPD. Causes hemodynamic compromise post-intubation by reducing venous return.',
        },
        {
          term: 'shunt fraction',
          definition: 'Percentage of cardiac output that passes through the lungs without participating in gas exchange (Qs/Qt). Elevated in ARDS, pneumonia, and intracardiac shunts.',
        },
        {
          term: 'apneic oxygenation',
          definition: 'Providing supplemental oxygen (high-flow nasal cannula 15 L/min) during apnea for intubation. Extends safe apnea time by maintaining oxygen delivery via mass flow.',
        },
        {
          term: 'Berlin criteria',
          definition: 'Diagnostic criteria for ARDS: acute onset (<1 week), bilateral infiltrates, non-cardiogenic, with PaO2/FiO2 ratio classifying severity (mild 200-300, moderate 100-200, severe <100).',
        },
      ],
      analogies: [
        'The A-a gradient is like measuring the distance between what oxygen SHOULD be in the blood (based on what is in the lungs) and what it ACTUALLY is. A wide gap means something in the lung is blocking the transfer.',
        'Auto-PEEP in asthma is like trying to blow up a balloon that never fully deflates between breaths -- the pressure keeps building until it affects the heart.',
        'The BLUE protocol is like a decision tree using ultrasound fingerprints -- each pattern of artifacts points to a specific diagnosis.',
        'Shunt physiology is like a highway bypass that skips the gas station -- the blood gets through the lung but never picks up oxygen.',
      ],
      examples: [
        'A 55-year-old with severe asthma is intubated for respiratory failure. Immediately after intubation, BP drops to 60/30. Ventilator shows high peak pressures and no ETCO2. Diagnosis: auto-PEEP with hemodynamic collapse. Ventilator is disconnected for 10 seconds, allowing trapped air to escape. BP recovers to 110/70.',
        'A 70-year-old man presents with acute dyspnea. Lung ultrasound shows bilateral B-lines with normal lung sliding (B-profile). NT-proBNP is 8,500 pg/mL. Diagnosis: acute decompensated heart failure. IV furosemide and NIV initiated with rapid improvement.',
        'A 35-year-old woman post-dental procedure develops cyanosis and SpO2 85% that does not improve with 100% O2. ABG shows PaO2 350 mmHg on 100% FiO2 but co-oximetry shows MetHb 28%. Treated with methylene blue 2 mg/kg IV.',
      ],
      clinicalNotes: `**Expert clinical pearls:**

1. **ABG in asthma:** A "normal" PaCO2 in acute asthma is a warning sign. Expected PaCO2 in acute asthma is 25-35 mmHg due to hyperventilation. Rising PaCO2 indicates fatigue and impending failure.

2. **Pulse oximetry gap:** If SpO2 reads ~85% and does not change with supplemental O2, obtain ABG with co-oximetry. Consider methemoglobinemia (SpO2 gap) or significant shunt physiology.

3. **Post-intubation hemodynamic collapse:** The three most common causes are auto-PEEP (disconnect ventilator briefly), tension pneumothorax (needle decompress), and reduced preload from positive pressure (bolus fluids).

4. **Lung ultrasound is faster than CXR:** BLUE protocol provides accurate diagnosis in <3 minutes. Particularly valuable for pneumothorax (lung point is pathognomonic) and CHF (bilateral B-lines).

5. **Angioedema from ACE inhibitors:** This is bradykinin-mediated and can occur years after starting the drug. Standard allergic reaction treatment (epinephrine, antihistamines) has minimal effect. Use icatibant or C1-INH.`,
    },

    5: {
      level: 5,
      summary:
        'Expert-level respiratory emergency management synthesizes advanced ventilation strategies, ECMO for refractory respiratory failure, precision medicine approaches to ARDS, novel biomarkers, AI-assisted diagnostics, and health equity considerations in respiratory emergency care.',
      explanation: `## State-of-the-Art Respiratory Emergency Management

### Advanced Ventilation Strategies

**Lung-protective ventilation evidence evolution:**
- ARDSNet (2000): Vt 6 mL/kg IBW, Pplat <30 cmH2O -- landmark trial showing 22% mortality reduction
- Driving pressure optimization: Delta P = Pplat - PEEP, target <15 cmH2O
- PROSEVA (2013): Prone positioning for 16+ hours/day in moderate-severe ARDS -- 28-day mortality 16% vs 32.8%
- ART trial (2017): Higher PEEP strategy with recruitment maneuvers vs ARDSNet table -- no benefit, possible harm
- ROSE trial (2019): Neuromuscular blockade for 48 hours in moderate-severe ARDS -- no benefit over light sedation

**Optimal PEEP strategies:**
- ARDSNet FiO2/PEEP table: Simple, widely used
- Transpulmonary pressure-guided (EPVent-2): Esophageal balloon, physiologically targeted
- Electrical impedance tomography (EIT): Real-time regional ventilation mapping
- Driving pressure-guided: Titrate PEEP to minimize driving pressure

**Airway pressure release ventilation (APRV):**
- Sustained high CPAP with brief release for CO2 clearance
- May improve recruitment in early ARDS
- Controversial: Tidal volumes can exceed lung-protective thresholds
- No definitive RCT evidence of superiority

**High-frequency oscillatory ventilation (HFOV):**
- OSCILLATE/OSCAR trials: No benefit (possible harm) in adults with ARDS
- Largely abandoned in adult practice
- May have role in pediatric ARDS (less definitive evidence)

---

### VV-ECMO for Refractory Respiratory Failure

**EOLIA trial (2018):**
- VV-ECMO vs conventional management for severe ARDS
- 60-day mortality: 35% vs 46% (p=0.09, not statistically significant)
- 28% crossover from control to ECMO arm
- Post-hoc Bayesian analysis: 88% probability of benefit
- Integrated into practice despite non-significant primary outcome

**ECMO indications (ELSO guidelines):**
- P/F ratio <80 on FiO2 >0.8 with optimized ventilation
- pH <7.20 with PaCO2 >80 despite RR 35/min
- Murray Lung Injury Score >3.0
- Age <65 (relative), no significant comorbidities
- Mechanical ventilation <7 days (ideally)

**ECMO as bridge:**
- Bridge to recovery: Most common scenario
- Bridge to transplant: For irreversible lung disease
- Bridge to decision: Allows diagnostic workup while supporting gas exchange

**Complications:**
- Hemorrhage (10-30%): Anticoagulation-related
- Thrombosis: Circuit, cannula, or patient
- Hemolysis: Pump-related shear stress
- Infection: Cannula site, nosocomial
- Air embolism: Rare but catastrophic

---

### Precision Medicine in ARDS

**ARDS subphenotypes:**
- **Hyper-inflammatory (phenotype 2):** Higher IL-6, IL-8, sTNFR1; lower protein C; shock; higher mortality (44% vs 24%)
- **Hypo-inflammatory (phenotype 1):** Lower inflammation markers; less vasopressor use; better prognosis

**Treatment response by phenotype (HARP-2 reanalysis):**
- Simvastatin: Beneficial in hyper-inflammatory phenotype, neutral/harmful in hypo-inflammatory
- Higher PEEP: Beneficial in hyper-inflammatory, potentially harmful in hypo-inflammatory
- Fluid-liberal: Harmful in hyper-inflammatory (more edema), neutral in hypo-inflammatory

**Rapid phenotyping tools:**
- Parsimonious model using 3 variables (IL-8, bicarbonate, protein C): 95% accuracy
- Point-of-care cytokine panels under development
- Machine learning classifiers using readily available clinical data

**Emerging ARDS therapies:**
- Mesenchymal stem cells (MSCs): Phase II trials showing safety, efficacy signals
- Inhaled prostacyclin/NO: Selective pulmonary vasodilation, improves V/Q matching
- Dexamethasone (DEXA-ARDS, CoDEX): Early moderate-dose steroids reduce ventilator days
- Anti-IL-6 receptor antibodies: Under investigation for hyper-inflammatory subtype

---

### Novel Biomarkers in Respiratory Emergencies

| Biomarker | Application | Clinical Utility |
|-----------|-------------|-----------------|
| Procalcitonin | Bacterial vs viral pneumonia | Guide antibiotic decisions |
| Presepsin | Sepsis-related respiratory failure | Earlier than procalcitonin |
| Club cell protein (CC16) | Lung epithelial injury | Predicts ARDS development |
| sRAGE | Alveolar epithelial injury | Correlates with ARDS severity |
| Ang-2 | Endothelial injury | Predicts mortality in ARDS |
| SP-D | Type II pneumocyte injury | ARDS prognosis |

**Multi-biomarker panels:**
- Combining sRAGE + Ang-2 + IL-8: AUC 0.85 for ARDS prediction
- Integration with clinical scores (APACHE, SOFA) improves prognostication
- Point-of-care platforms enabling rapid bedside assessment

---

### AI and Technology in Respiratory Emergency Assessment

**AI-assisted diagnostics:**
- Deep learning chest X-ray interpretation: Detects pneumothorax, consolidation, effusion, pulmonary edema with sensitivity comparable to radiologists
- CT PE detection algorithms: FDA-cleared, reduce missed PE rate
- Automated lung ultrasound interpretation: B-line counting, sliding detection
- Predictive models for intubation need: Using continuous vital sign data, outperform clinical gestalt

**Continuous monitoring innovations:**
- Impedance pneumography: Non-invasive respiratory rate and pattern monitoring
- Capnography trending: Early detection of respiratory depression (post-sedation, opioid use)
- Wearable pulse oximetry with AI: Alerts for desaturation patterns predicting deterioration 6-8 hours in advance
- EIT at bedside: Real-time regional ventilation monitoring for PEEP optimization

---

### Health Equity in Respiratory Emergency Care

**Pulse oximetry racial bias:**
- Sjoding et al. (NEJM, 2020): Pulse oximetry overestimates SpO2 by 2-3% in Black patients
- Occult hypoxemia (SpO2 >=92% but PaO2 <60): 3x more common in Black patients
- Clinical impact: Delayed recognition of hypoxemia, delayed supplemental O2
- FDA advisory (2021): Awareness of limitations, consider ABG if clinical picture suggests hypoxemia

**Asthma disparities:**
- Black and Hispanic children: 2-3x higher asthma ED visit and hospitalization rates
- Contributing factors: Environmental exposures, housing quality, access to preventive care, medication adherence
- Language barriers: Inhaler technique education, action plan understanding
- Solutions: Community health workers, school-based asthma programs, culturally concordant education

**Language-concordant respiratory education:**
- Spanish terminology for respiratory symptoms:
  - Falta de aire / dificultad para respirar (shortness of breath)
  - Silbido al respirar / sibilancias (wheezing)
  - Tos con sangre (coughing blood)
  - Labios morados / azulados (blue/purple lips)
  - Respiracion rapida (rapid breathing)
- Multilingual discharge instructions reduce 30-day readmissions for asthma/COPD

---

### Systems of Care and Quality Metrics

**Sepsis-related respiratory failure:**
- Hour-1 bundle compliance: Antibiotics, cultures, lactate, fluid resuscitation
- Time to appropriate antibiotics: Each hour delay increases mortality 7-8%
- Early recognition of respiratory deterioration: Modified Early Warning Score (MEWS), National Early Warning Score (NEWS2)

**Intubation quality metrics:**
- First-pass success rate: Target >85%
- Complications (hypotension, hypoxia, aspiration): Target <10%
- Video laryngoscopy use: Associated with higher first-pass success
- Checklist use for RSI: Reduces adverse events

**ARDS care bundle compliance:**
- Low tidal volume ventilation: Target 100% compliance
- Plateau pressure monitoring: Target <30 cmH2O
- Prone positioning for P/F <150: Target >80% eligible patients
- Conservative fluid management after initial resuscitation`,
      keyTerms: [
        {
          term: 'driving pressure',
          definition: 'Plateau pressure minus PEEP (Pplat - PEEP). Represents the pressure needed to deliver the tidal volume. Values >15 cmH2O associated with increased mortality in ARDS. Strongest ventilator variable predicting outcomes.',
        },
        {
          term: 'ARDS subphenotypes',
          definition: 'Distinct biological subtypes of ARDS identified by inflammatory biomarker profiles. Hyper-inflammatory phenotype has higher mortality and differential treatment response (responds to statins, higher PEEP).',
        },
        {
          term: 'VV-ECMO',
          definition: 'Veno-venous extracorporeal membrane oxygenation. Provides gas exchange support by draining venous blood, oxygenating it externally, and returning it. Used for refractory hypoxemic respiratory failure.',
        },
        {
          term: 'sRAGE',
          definition: 'Soluble receptor for advanced glycation end-products. Biomarker of alveolar type I epithelial cell injury. Correlates with ARDS severity and predicts outcomes.',
          pronunciation: 'S-rage',
        },
        {
          term: 'occult hypoxemia',
          definition: 'Arterial hypoxemia (PaO2 <60 mmHg) masked by falsely reassuring pulse oximetry readings. More common in patients with darker skin pigmentation due to pulse oximeter calibration bias.',
        },
        {
          term: 'transpulmonary pressure',
          definition: 'Airway pressure minus pleural pressure (estimated by esophageal balloon). Represents the actual distending pressure of the lung. Used for individualized PEEP titration in ARDS.',
        },
      ],
      analogies: [
        'ARDS subphenotypes are like different types of house fires -- a grease fire and an electrical fire both destroy the house, but they require completely different firefighting approaches.',
        'VV-ECMO is like an external artificial lung -- it takes over the gas exchange work while the damaged lungs rest and heal.',
        'Driving pressure is like the stress on a rubber band being stretched -- too much stretch (>15 cmH2O) causes damage, regardless of the starting tension (PEEP).',
        'Occult hypoxemia from pulse oximetry bias is like a thermometer that reads 98.6F when the patient actually has a fever -- the tool looks normal but the patient is not.',
      ],
      clinicalNotes: `**Expert-level clinical pearls:**

1. **Driving pressure over tidal volume:** Emerging evidence suggests driving pressure (Pplat - PEEP) is a stronger predictor of ARDS mortality than tidal volume alone. Target <15 cmH2O and titrate PEEP to minimize driving pressure.

2. **Early prone positioning:** Do not wait to prone moderate-severe ARDS (P/F <150). PROSEVA showed dramatic mortality benefit. Start within 12-24 hours if oxygenation targets not met with optimized ventilation.

3. **ECMO timing:** Earlier ECMO initiation (before prolonged high-FiO2, high-pressure ventilation) is associated with better outcomes. Develop triggers for ECMO consultation with your team.

4. **Pulse oximetry bias:** In patients with darker skin pigmentation, consider ABG confirmation when clinical assessment suggests worse oxygenation than SpO2 indicates. A SpO2 of 92-96% may mask true PaO2 <60 mmHg.

5. **ARDS phenotyping in practice:** While bedside rapid phenotyping is not yet standard, awareness of inflammatory subtypes guides clinical reasoning. A highly inflamed patient (high vasopressor needs, high lactate, low platelets) may benefit from early steroids and higher PEEP.

6. **Post-extubation respiratory failure:** High-flow nasal cannula reduces reintubation rates compared to conventional O2. In high-risk patients, prophylactic NIV alternating with HFNC reduces reintubation further.

7. **Language equity:** Respiratory emergencies are terrifying for patients. Language-concordant communication reduces anxiety, improves cooperation with treatment, and is associated with better outcomes. Use professional interpreters, not family members, for critical decisions.`,
    },
  },

  media: [
    {
      id: 'respiratory-warning-signs-infographic',
      type: 'diagram',
      filename: 'respiratory-warning-signs-infographic.svg',
      title: 'Respiratory Warning Signs Infographic',
      description: 'Visual guide to recognizing breathing emergencies in English and Spanish',
    },
    {
      id: 'blue-protocol-algorithm',
      type: 'diagram',
      filename: 'blue-protocol-algorithm.svg',
      title: 'BLUE Protocol Algorithm',
      description: 'Lung ultrasound decision tree for acute dyspnea',
    },
    {
      id: 'respiratory-distress-vs-failure',
      type: 'diagram',
      filename: 'respiratory-distress-vs-failure.svg',
      title: 'Respiratory Distress vs Failure',
      description: 'Clinical signs differentiating compensated distress from decompensated failure',
    },
  ],

  citations: [
    {
      id: 'ardsnet-2000',
      type: 'article',
      title: 'Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and ARDS',
      authors: ['ARDS Network'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJM200005043421801',
      accessedDate: '2026-01-30',
    },
    {
      id: 'proseva-2013',
      type: 'article',
      title: 'Prone positioning in severe acute respiratory distress syndrome',
      authors: ['Guerin, C.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1214103',
      accessedDate: '2026-01-30',
    },
    {
      id: 'eolia-2018',
      type: 'article',
      title: 'Extracorporeal membrane oxygenation for severe ARDS',
      authors: ['Combes, A.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1800385',
      accessedDate: '2026-01-30',
    },
    {
      id: 'sjoding-2020',
      type: 'article',
      title: 'Racial Bias in Pulse Oximetry Measurement',
      authors: ['Sjoding, M.W.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMc2029240',
      accessedDate: '2026-01-30',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-cardiac-warning-signs', targetType: 'condition', relationship: 'sibling', label: 'Cardiac Warning Signs' },
    { targetId: 'emergency-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Cardiac Arrest' },
    { targetId: 'system-respiratory', targetType: 'system', relationship: 'parent', label: 'Respiratory System' },
    { targetId: 'emergency-neurological-warning-signs', targetType: 'condition', relationship: 'sibling', label: 'Neurological Warning Signs' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['emergency medicine', 'pulmonology', 'warning signs', 'patient education'],
    keywords: [
      'dyspnea', 'stridor', 'cyanosis', 'respiratory distress', 'respiratory failure',
      'asthma', 'COPD', 'ARDS', 'anaphylaxis', 'pneumothorax',
      'dificultad para respirar', 'falta de aire',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'internal medicine', 'pulmonology'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default respiratoryWarnings;
