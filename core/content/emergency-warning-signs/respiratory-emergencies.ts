/**
 * Respiratory Emergencies - Warning Signs and Response
 *
 * Comprehensive content on recognizing respiratory emergencies including
 * severe asthma attacks, anaphylaxis, choking, and acute respiratory failure.
 */

import { EducationalContent } from '../types';

export const respiratoryEmergencies: EducationalContent = {
  id: 'emergency-respiratory-warning-signs',
  type: 'condition',
  name: 'Respiratory Emergency Warning Signs',
  alternateNames: ['Breathing Emergency', 'Respiratory Distress', 'Acute Dyspnea', 'Airway Emergency'],

  levels: {
    1: {
      level: 1,
      summary: 'Breathing problems can be emergencies when you cannot get enough air. Knowing the signs helps you get help fast.',
      explanation: `## When Breathing Becomes an Emergency

Breathing is something we do without thinking, but when something goes wrong, it can be very scary and dangerous. Your body needs oxygen to live, and you need to breathe to get it.

**Signs of a breathing emergency:**

1. **Can't catch your breath** - You feel like you can't get enough air no matter how hard you try

2. **Breathing very fast** - Taking many quick, shallow breaths

3. **Making noises when breathing:**
   - Wheezing (whistling sound)
   - Stridor (high-pitched sound when breathing in)
   - Gurgling sounds

4. **Skin color changes:**
   - Lips turning blue or gray
   - Fingernails turning blue
   - Face looking pale or gray

5. **Using extra muscles to breathe:**
   - Neck muscles pulling in
   - Ribs showing when breathing in
   - Nostrils flaring

## Common Breathing Emergencies

**Asthma attack** - Airways get tight and swollen, making it hard to breathe out

**Allergic reaction (anaphylaxis)** - Throat swells up after eating something or getting stung

**Choking** - Food or object stuck in your throat

**Pneumonia** - Infection in your lungs makes breathing hard

## What To Do

**If someone can't breathe:**
1. Call 911 immediately
2. Keep the person calm and sitting up (usually helps breathing)
3. If they have an inhaler or epinephrine pen, help them use it
4. Loosen tight clothing around their neck and chest
5. If they stop breathing, be ready to do CPR

**If someone is choking:**
1. Ask "Are you choking?" - if they can't speak or cough, help them
2. Stand behind them and give back blows
3. Do the Heimlich maneuver (abdominal thrusts)
4. If they become unconscious, call 911 and start CPR

**Never:**
- Leave someone who can't breathe alone
- Give them water if they're having trouble breathing
- Tell them to "just calm down" - they need help!`,
      keyTerms: [
        { term: 'asthma attack', definition: 'When airways in your lungs get tight and swollen, making it very hard to breathe' },
        { term: 'anaphylaxis', definition: 'A severe allergic reaction that can make your throat swell shut', pronunciation: 'an-ah-fih-LAK-sis' },
        { term: 'choking', definition: 'When food or an object gets stuck in your throat and blocks your airway' },
        { term: 'Heimlich maneuver', definition: 'A way to help someone who is choking by pushing on their belly to force air out', pronunciation: 'HIME-lick' },
      ],
      analogies: [
        'Your airways are like straws for air - during asthma, the straws get pinched and it\'s hard to suck air through.',
        'Anaphylaxis is like your throat trying to close a door that should stay open for air.',
        'Breathing muscles working hard is like your car engine revving high just to go slow - something is blocking the way.',
      ],
      examples: [
        'A child at a birthday party starts wheezing and can\'t catch their breath after running - they need their inhaler and may need 911.',
        'Someone eating peanuts suddenly has a swollen face and trouble breathing - this is anaphylaxis, call 911 and use their EpiPen if they have one.',
      ],
    },

    2: {
      level: 2,
      summary: 'Respiratory emergencies occur when the body cannot get enough oxygen due to airway obstruction, lung disease, or allergic reactions. Rapid recognition and response can prevent brain damage and death.',
      explanation: `## Recognizing Respiratory Distress

Respiratory emergencies can develop gradually or occur suddenly. Understanding the warning signs helps you recognize when someone needs immediate medical help.

### Signs of Respiratory Distress

**Early signs (compensated):**
- Increased breathing rate (tachypnea)
- Using accessory muscles (neck, chest, abdomen)
- Nasal flaring
- Sitting upright, unable to lie down
- Difficulty speaking full sentences
- Anxiety, restlessness

**Late signs (decompensating):**
- Cyanosis (blue/gray color) of lips, fingernails
- Altered mental status, confusion
- Extreme fatigue
- Slow, irregular breathing
- Silent chest (no air movement despite effort)

### Severe Asthma Attack (Status Asthmaticus)

**What happens:** Airways become severely narrowed due to inflammation, mucus, and muscle spasm.

**Warning signs:**
- Peak flow <50% of personal best (if known)
- Cannot complete sentences
- Accessory muscle use
- Little improvement with rescue inhaler
- Hunched forward posture (tripod position)

**Red flags requiring 911:**
- No improvement after 3 inhaler puffs
- Lips or fingernails turning blue
- Difficulty walking or talking
- Confusion or drowsiness
- Peak flow <25% of predicted

### Anaphylaxis

**What happens:** Severe allergic reaction causing rapid swelling, especially of airways.

**Common triggers:**
- Foods (peanuts, tree nuts, shellfish, eggs)
- Insect stings (bees, wasps)
- Medications (penicillin, NSAIDs)
- Latex

**Warning signs (may progress within minutes):**
- Throat tightness, difficulty swallowing
- Swelling of face, lips, tongue
- Voice changes, hoarseness
- Wheezing, difficulty breathing
- Skin: hives, redness, itching
- Nausea, vomiting, abdominal pain
- Dizziness, rapid heartbeat
- Feeling of doom

### Choking (Airway Obstruction)

**Complete obstruction:**
- Cannot speak, cough, or make sounds
- Universal choking sign (hands to throat)
- May turn blue/gray

**Partial obstruction:**
- Weak cough
- High-pitched sound when breathing in
- Difficulty breathing

### Pulmonary Embolism (PE)

**What happens:** Blood clot blocks blood flow in the lungs.

**Risk factors:**
- Recent surgery or immobilization
- Long flights or car rides
- Birth control pills, pregnancy
- Cancer, clotting disorders

**Warning signs:**
- Sudden shortness of breath
- Chest pain (worse with deep breath)
- Rapid heart rate
- Coughing (may have blood)
- Leg swelling, pain (if clot started there)

## Emergency Response

**For severe asthma:**
1. Call 911
2. Help use rescue inhaler (4 puffs every 4 minutes if available)
3. Stay calm, encourage slow breathing
4. Sitting upright usually helps

**For anaphylaxis:**
1. Call 911 immediately
2. Use epinephrine auto-injector (EpiPen) if available - inject into outer thigh
3. Lay person flat with legs elevated (unless breathing difficulty, then sit up)
4. Be ready for a second reaction
5. Second epi dose after 5-15 minutes if no improvement

**For choking (conscious adult):**
1. Encourage coughing if partial obstruction
2. If complete obstruction: 5 back blows, then 5 abdominal thrusts
3. Repeat until object is expelled or person becomes unconscious
4. If unconscious: call 911, start CPR, look for object before each breath

## When to Call 911 vs. Seek Other Care

| Call 911 | Go to ER | Urgent Care/Doctor |
|----------|----------|-------------------|
| Cannot speak/complete sentences | Mild-moderate asthma flare | Mild breathing symptoms |
| Blue lips or fingernails | Fever with difficulty breathing | Cough, mild wheezing |
| Anaphylaxis/throat swelling | Breathing improved but concerning | Upper respiratory infection |
| Complete choking | Known PE symptoms | Mild allergic reaction |
| Loss of consciousness | | |`,
      keyTerms: [
        { term: 'status asthmaticus', definition: 'A severe, prolonged asthma attack that does not respond to initial treatment', pronunciation: 'STAT-us az-MAT-ih-kus' },
        { term: 'cyanosis', definition: 'Blue or gray discoloration of skin due to lack of oxygen in the blood', pronunciation: 'sigh-ah-NO-sis' },
        { term: 'pulmonary embolism', definition: 'A blood clot that travels to and blocks blood vessels in the lungs', pronunciation: 'PULL-moh-nair-ee EM-boh-liz-um' },
        { term: 'epinephrine', definition: 'Adrenaline; a medication that reverses severe allergic reactions by opening airways and raising blood pressure', pronunciation: 'ep-ih-NEF-rin' },
        { term: 'tachypnea', definition: 'Abnormally rapid breathing rate', pronunciation: 'tak-ip-NEE-ah' },
      ],
      analogies: [
        'Status asthmaticus is like a traffic jam in your airways that just won\'t clear - you need emergency road crews (ambulance) to help.',
        'Anaphylaxis is like your immune system hitting a panic button that closes all the exits (airways).',
        'A pulmonary embolism is like a roadblock in the highway between your heart and lungs.',
      ],
      clinicalNotes: 'Peak flow <50% with no improvement after initial bronchodilator suggests severe exacerbation requiring emergency care. In anaphylaxis, epinephrine is the first-line treatment - do not delay for antihistamines.',
    },

    3: {
      level: 3,
      summary: 'Acute respiratory failure requires rapid assessment of airway patency, breathing adequacy, and circulatory status. Understanding pathophysiology guides recognition and intervention for obstructive, restrictive, and vascular causes of respiratory emergencies.',
      explanation: `## Pathophysiology of Respiratory Failure

Respiratory failure occurs when the respiratory system fails to maintain adequate gas exchange. This can be classified as:

### Type I (Hypoxemic) Respiratory Failure
- PaO2 <60 mmHg on room air
- Normal or low PaCO2
- V/Q mismatch, shunt, diffusion impairment
- Causes: Pneumonia, ARDS, pulmonary edema, PE

### Type II (Hypercapnic) Respiratory Failure
- PaCO2 >45 mmHg with respiratory acidosis
- Alveolar hypoventilation
- Causes: COPD exacerbation, neuromuscular disease, drug overdose

## Severe Asthma Exacerbation

### Pathophysiology
- Airway inflammation and edema
- Bronchospasm (smooth muscle contraction)
- Mucus hypersecretion and plugging
- Air trapping leading to hyperinflation
- Progressive respiratory muscle fatigue

### Clinical Assessment

**Severity Classification:**

| Parameter | Mild-Moderate | Severe | Life-Threatening |
|-----------|--------------|--------|------------------|
| Speaks in | Sentences | Phrases | Words or silent |
| RR | <25 | >25 | Variable |
| HR | <110 | >110 | Bradycardia |
| SpO2 | >92% | 90-92% | <90% |
| Peak Flow | 50-75% | 33-50% | <33% or unable |
| Mental Status | Normal | Agitated | Confused, drowsy |
| Accessory muscles | Mild | Moderate | Paradoxical breathing |

**Ominous signs:**
- Silent chest (severe obstruction)
- Cyanosis
- Feeble respiratory effort
- Bradycardia or arrhythmia
- Hypotension
- Exhaustion, confusion
- PaCO2 normal or elevated (should be low in acute asthma)

### Management Priorities
1. High-flow oxygen (target SpO2 94-98%)
2. Continuous nebulized albuterol + ipratropium
3. Systemic corticosteroids (methylprednisolone 125mg IV)
4. Magnesium sulfate 2g IV (severe cases)
5. Consider IV beta-agonists, theophylline, or ketamine
6. Prepare for intubation if deteriorating

## Anaphylaxis

### Pathophysiology
- IgE-mediated mast cell and basophil degranulation
- Massive histamine and leukotriene release
- Vasodilation, increased vascular permeability
- Smooth muscle contraction (bronchospasm)

### Diagnostic Criteria (any one of three):
1. Acute skin involvement + respiratory or cardiovascular symptoms
2. Two or more systems affected after likely allergen exposure
3. Hypotension after known allergen

### Biphasic Reactions
- 5-20% of patients experience recurrence
- Typically 6-12 hours later (up to 72 hours)
- Warrants observation period

### Management
1. **Epinephrine IM** (0.3-0.5mg, 1:1000) - repeat q5-15min
2. Position: Supine with legs elevated (if tolerating)
3. Oxygen therapy
4. IV fluids (crystalloid 1-2L bolus)
5. Adjuncts: H1 blocker, H2 blocker, corticosteroids
6. Glucagon if on beta-blockers (may be refractory to epinephrine)

## Pulmonary Embolism

### Clinical Probability (Wells Criteria)
- Clinical signs of DVT: 3 points
- PE most likely diagnosis: 3 points
- HR >100: 1.5 points
- Immobilization/surgery in past 4 weeks: 1.5 points
- Previous DVT/PE: 1.5 points
- Hemoptysis: 1 point
- Active cancer: 1 point

**Interpretation:** ≤4 = PE unlikely; >4 = PE likely

### Clinical Presentation Spectrum
- **Massive PE:** Hypotension, RV failure, high mortality
- **Submassive PE:** RV dysfunction without hypotension
- **Low-risk PE:** No RV dysfunction or hemodynamic compromise

### Management Approach
- Anticoagulation (heparin, LMWH, or DOAC)
- Thrombolysis for massive PE with hypotension
- Consider catheter-directed therapy or embolectomy
- IVC filter if anticoagulation contraindicated

## Acute Airway Obstruction

### Foreign Body Aspiration
**In adults:**
- Often occurs while eating
- Aspiration more common to right main bronchus (straighter)
- May cause unilateral wheezing

**Management:**
- Conscious: Back blows and abdominal thrusts
- Unconscious: CPR with airway checks
- May require bronchoscopy for distal objects

### Upper Airway Obstruction

**Causes:**
- Angioedema (ACE inhibitor, hereditary)
- Epiglottitis (less common post-Hib vaccine)
- Peritonsillar abscess
- Ludwig's angina
- Foreign body
- Trauma

**Signs of impending airway loss:**
- Stridor (inspiratory high-pitched sound)
- Drooling (unable to swallow)
- Tripod positioning
- Voice changes
- Anxiety, restlessness

**Management priorities:**
- Call for help early
- Prepare for difficult airway
- Avoid agitation (especially in pediatrics)
- Consider heliox for temporary bridge
- Definitive airway (intubation, surgical)

## Tension Pneumothorax

### Pathophysiology
- One-way valve mechanism
- Progressive air accumulation in pleural space
- Mediastinal shift, IVC compression
- Obstructive shock

### Clinical Features
- Severe dyspnea
- Hypotension, tachycardia
- Unilateral absent breath sounds
- Tracheal deviation (late sign)
- Distended neck veins
- Subcutaneous emphysema

### Emergency Treatment
- Immediate needle decompression (2nd ICS, MCL)
- Followed by chest tube insertion
- Do not delay for imaging if clinical diagnosis made`,
      keyTerms: [
        { term: 'ARDS', definition: 'Acute Respiratory Distress Syndrome; severe inflammatory lung injury causing refractory hypoxemia', pronunciation: 'A-R-D-S' },
        { term: 'V/Q mismatch', definition: 'Ventilation-perfusion mismatch; areas of lung receiving blood but inadequate air or vice versa' },
        { term: 'stridor', definition: 'High-pitched inspiratory sound indicating upper airway obstruction', pronunciation: 'STRY-door' },
        { term: 'angioedema', definition: 'Swelling of deep skin and mucosal tissues, especially dangerous when affecting airway', pronunciation: 'AN-jee-oh-eh-DEE-mah' },
        { term: 'tension pneumothorax', definition: 'Life-threatening condition where air trapped in pleural space progressively compresses heart and great vessels' },
        { term: 'Wells criteria', definition: 'Clinical prediction rule used to estimate probability of pulmonary embolism' },
      ],
      clinicalNotes: 'In severe asthma, a "normal" PaCO2 is concerning - patients should be hypocapnic due to hyperventilation. Normalization suggests fatigue and impending respiratory failure. For anaphylaxis, IM epinephrine in the lateral thigh is superior to SC due to faster absorption.',
    },

    4: {
      level: 4,
      summary: 'Advanced management of respiratory emergencies requires integration of physiologic monitoring, evidence-based interventions, and preparation for advanced airway management including RSI, mechanical ventilation strategies, and management of complex scenarios.',
      explanation: `## Advanced Assessment of Respiratory Failure

### Arterial Blood Gas Interpretation

**Systematic approach:**
1. pH: Acidemia (<7.35) vs Alkalemia (>7.45)
2. Primary process: PaCO2 (respiratory) vs HCO3 (metabolic)
3. Compensation: Acute vs chronic, expected vs actual
4. Oxygenation: PaO2, A-a gradient, P/F ratio

**Expected compensation:**
- Acute respiratory acidosis: HCO3 ↑ 1 mEq/L per 10 mmHg ↑ PaCO2
- Chronic respiratory acidosis: HCO3 ↑ 3.5 mEq/L per 10 mmHg ↑ PaCO2
- Metabolic acidosis: PaCO2 = 1.5 × HCO3 + 8 (±2) [Winter's formula]

**Oxygenation assessment:**
- A-a gradient = PAO2 - PaO2 = (713 × FiO2 - PaCO2/0.8) - PaO2
- Normal: Age/4 + 4 mmHg
- P/F ratio: PaO2/FiO2; <300 = ALI, <200 = ARDS, <100 = severe ARDS

### Work of Breathing Assessment

**Objective measures:**
- Respiratory rate, tidal volume
- Minute ventilation (RR × VT)
- Rapid shallow breathing index (RR/VT) - >105 predicts weaning failure
- Maximal inspiratory pressure (MIP)
- Accessory muscle use

**Signs of impending failure:**
- Paradoxical abdominal movement
- Alternating rib cage/abdominal breathing
- Respiratory rate >35 or falling inappropriately
- Declining mental status

## Status Asthmaticus: Advanced Management

### Pharmacologic Therapy Escalation

**Standard therapy:**
- Continuous nebulized beta-agonist (albuterol 10-15mg/hr)
- Ipratropium (0.5mg q20min × 3, then q4h)
- Methylprednisolone 125mg IV q6h

**Refractory cases:**
- Magnesium sulfate 2g IV over 20 min (smooth muscle relaxation)
- IV beta-agonists (terbutaline loading dose 10mcg/kg, then 0.1-0.4mcg/kg/min)
- Ketamine (bronchodilator properties, may facilitate intubation)
- Heliox (80:20 helium:oxygen) - reduces turbulent flow
- IV aminophylline (narrow therapeutic window, monitor levels)

### Mechanical Ventilation in Severe Asthma

**Challenges:**
- Dynamic hyperinflation (auto-PEEP)
- High airway pressures
- Barotrauma risk
- Cardiovascular collapse on induction

**Ventilator strategy:**
- Low respiratory rate (8-12/min)
- Prolonged expiratory time (I:E 1:3 to 1:5)
- Lower tidal volumes (6-8 mL/kg IBW)
- Permissive hypercapnia (tolerate PaCO2 60-80 if pH >7.2)
- Minimize PEEP (auto-PEEP already present)
- Target plateau pressure <30 cmH2O

**RSI modifications:**
- Ketamine preferred (bronchodilator, maintains BP)
- Avoid histamine-releasing agents (morphine, atracurium)
- Consider awake intubation if feasible
- Prepare for cardiovascular collapse (fluids, vasopressors ready)

## Anaphylaxis: Refractory Cases

### Epinephrine-Resistant Anaphylaxis

**Risk factors:**
- Beta-blocker use
- Delayed epinephrine administration
- Severe allergen exposure
- Older patients with cardiovascular disease

**Management escalation:**
1. Repeat IM epinephrine (up to 3 doses)
2. IV epinephrine infusion (1-10 mcg/min, titrate)
3. Glucagon 1-5mg IV (beta-blocker reversal)
4. Vasopressin for refractory hypotension
5. Methylene blue (nitric oxide antagonist - investigational)

### Airway Considerations in Anaphylaxis

**Predictors of difficult airway:**
- Tongue/lip swelling
- Voice changes, stridor
- Rapid progression

**Management:**
- Early airway intervention before complete obstruction
- Consider awake fiberoptic intubation
- Prepare for surgical airway (cricothyrotomy)
- Post-intubation: May develop laryngeal edema - ensure adequate cuff seal

## Pulmonary Embolism: Risk Stratification

### PESI Score (Pulmonary Embolism Severity Index)

| Factor | Points |
|--------|--------|
| Age | 1 per year |
| Male sex | 10 |
| Cancer | 30 |
| Heart failure | 10 |
| Chronic lung disease | 10 |
| HR ≥110 | 20 |
| SBP <100 | 30 |
| RR ≥30 | 20 |
| Temp <36°C | 20 |
| Altered mental status | 60 |
| SpO2 <90% | 20 |

Class I-II (≤85): Low risk, consider outpatient management
Class III-V (>85): Higher mortality risk

### sPESI (Simplified PESI)
One point each: Age >80, cancer, chronic cardiopulmonary disease, HR ≥110, SBP <100, SpO2 <90%
0 points = low risk; ≥1 = high risk

### Reperfusion Therapy Decision

**Systemic thrombolysis (tPA 100mg over 2h):**
- Massive PE with hemodynamic instability
- Cardiac arrest (consider half-dose)
- Contraindications: Recent surgery, bleeding, stroke

**Catheter-directed therapy:**
- Submassive PE with RV dysfunction
- Contraindication to systemic lysis
- Lower bleeding risk

**Surgical embolectomy:**
- Failed thrombolysis
- Contraindication to lysis with massive PE
- Available expertise

## Advanced Airway Management

### Rapid Sequence Intubation (RSI)

**Preparation (SOAP ME):**
- Suction
- Oxygen (preoxygenate 3-5 min, NRB or BVM)
- Airway equipment
- Positioning (sniffing position, ramped if obese)
- Monitoring
- End-tidal CO2

**Medications:**
- Pretreatment: Consider lidocaine (asthma, elevated ICP)
- Induction: Ketamine, etomidate, or propofol
- Paralytic: Succinylcholine (1.5mg/kg) or rocuronium (1.2mg/kg)

### Difficult Airway Predictors (LEMON)

- **L**ook externally (facial trauma, obesity)
- **E**valuate 3-3-2 rule (mouth opening, mandible, hyoid)
- **M**allampati score
- **O**bstruction/obesity
- **N**eck mobility

### Post-Intubation Care

- Confirm placement: ETCO2 waveform, bilateral breath sounds, CXR
- Secure tube appropriately
- Sedation and analgesia
- Ventilator settings based on pathology
- Avoid hyperventilation in most cases
- Gastric decompression (OG/NG tube)`,
      keyTerms: [
        { term: 'auto-PEEP', definition: 'Intrinsic positive end-expiratory pressure from air trapping; occurs when expiration is incomplete before next breath', pronunciation: 'auto-peep' },
        { term: 'P/F ratio', definition: 'PaO2 to FiO2 ratio; used to quantify severity of hypoxemia and diagnose ARDS' },
        { term: 'PESI', definition: 'Pulmonary Embolism Severity Index; validated score predicting 30-day mortality in PE' },
        { term: 'RSI', definition: 'Rapid Sequence Intubation; simultaneous induction and paralysis to minimize aspiration risk' },
        { term: 'permissive hypercapnia', definition: 'Accepting elevated CO2 levels to avoid ventilator-induced lung injury from high pressures' },
        { term: 'dynamic hyperinflation', definition: 'Progressive air trapping from incomplete exhalation, common in severe asthma and COPD' },
      ],
      clinicalNotes: 'In severe asthma requiring intubation, prepare for hypotension from loss of respiratory-driven venous return and medication effects. Consider ketamine for induction (bronchodilator properties). Start with low RR and long expiratory times to allow for complete exhalation. Monitor plateau pressure and intrinsic PEEP.',
    },

    5: {
      level: 5,
      summary: 'Expert management of respiratory emergencies requires integration of evidence from landmark trials, understanding of complex pathophysiology, systems-based quality improvement, and management of unusual presentations and emerging therapies.',
      explanation: `## Evidence-Based Management Updates

### High-Flow Nasal Cannula (HFNC) in Respiratory Failure

**FLORALI Trial (2015):**
- HFNC vs standard O2 vs NIV in acute hypoxemic respiratory failure
- Lower 90-day mortality with HFNC (HR 0.46)
- Especially beneficial in P/F <200

**Mechanism of benefit:**
- PEEP effect (1 cmH2O per 10 L/min)
- Dead space washout
- Humidification
- Comfort and adherence

**Appropriate use:**
- Hypoxemic respiratory failure without hypercapnia
- Post-extubation support
- DNI patients with reversible process
- Bridge to definitive therapy

### NIV in Acute Respiratory Failure

**Strong indications:**
- COPD exacerbation with hypercapnic failure (NNT 5 to prevent intubation)
- Cardiogenic pulmonary edema
- Immunocompromised patients

**Contraindications:**
- Unable to protect airway
- Hemodynamic instability
- High aspiration risk
- Facial trauma/surgery

**ACPE management:**
- CPAP/BiPAP reduces intubation and mortality
- Rapid improvement expected (minutes to hours)
- If no improvement in 1-2 hours, consider intubation

### Lung Protective Ventilation

**ARDS Net Protocol (2000):**
- Tidal volume 6 mL/kg IBW (vs 12)
- Plateau pressure <30 cmH2O
- 22% relative reduction in mortality

**Subsequent developments:**
- PEEP titration (higher PEEP may benefit severe ARDS)
- Prone positioning: PROSEVA showed 16% absolute mortality reduction in severe ARDS
- Neuromuscular blockade: ACURASYS showed benefit, ROSE did not confirm
- ECMO: EOLIA showed benefit as rescue therapy

### Corticosteroids in ARDS

**DEXA-ARDS (2020):**
- Dexamethasone 20mg x 5d, then 10mg x 5d
- Reduced ventilator days and mortality in moderate-severe ARDS

**Implementation:**
- Consider in moderate-severe ARDS (P/F <200)
- Start within first week
- Avoid in late ARDS (may worsen outcomes)

## Complex Scenarios

### Obesity and Respiratory Emergencies

**Physiologic challenges:**
- Reduced FRC and ERV
- Atelectasis in supine position
- Increased work of breathing
- Difficult intubation (LEMON criteria often positive)

**Management adaptations:**
- Ramped or reverse Trendelenburg positioning
- Aggressive preoxygenation (HFNC, NIV)
- Video laryngoscopy as first-line
- Higher PEEP requirements
- Consider early tracheostomy for prolonged ventilation

### Pregnancy and Respiratory Emergencies

**Physiologic changes:**
- Increased oxygen consumption
- Decreased FRC (diaphragm elevation)
- Relative hyperventilation (PaCO2 ~30 mmHg normal)
- Difficult airway (edema, weight gain)

**Asthma in pregnancy:**
- Same medications safe (beta-agonists, steroids)
- Uncontrolled asthma more dangerous than treatment
- Fetal monitoring during severe exacerbations

**PE in pregnancy:**
- Higher incidence (hypercoagulable state)
- D-dimer unreliable (normally elevated)
- CTPA preferred over V/Q (lower fetal radiation)
- LMWH treatment of choice
- Thrombolysis reserved for life-threatening PE

### Immunocompromised Patients

**Differential diagnosis expanded:**
- PJP (Pneumocystis jirovecii pneumonia)
- CMV pneumonitis
- Fungal infections (Aspergillus, Cryptococcus)
- Atypical bacteria (Nocardia, MAC)
- Drug-induced pneumonitis

**Management considerations:**
- Early bronchoscopy for diagnosis
- Broader empiric coverage
- NIV preferred over intubation when possible
- High mortality with intubation (especially BMT patients)

### Overlap Syndromes

**Asthma-COPD Overlap (ACO):**
- Features of both conditions
- Higher exacerbation rates
- Benefit from ICS + LABA + LAMA

**Acute asthma with concurrent pneumonia:**
- May not mount typical fever response on steroids
- Antibiotics indicated if infiltrate present
- Higher mortality than either alone

## Emerging Therapies

### Biologic Therapies in Acute Severe Asthma

**Emerging evidence:**
- Benralizumab (anti-IL5) may reduce exacerbation duration
- Omalizumab (anti-IgE) for allergic asthma
- Role in acute setting still being defined

### Extracorporeal CO2 Removal (ECCO2R)

**Concept:**
- Low-flow VV circuit primarily for CO2 removal
- Allows ultra-protective ventilation
- Avoids need for ECMO in some patients

**Applications:**
- Severe hypercapnic failure (COPD, asthma)
- Bridge to lung transplant
- Allow lung rest in severe ARDS

### Targeted Temperature Management

**Post-cardiac arrest (respiratory cause):**
- TTM to 32-36°C for 24 hours
- Improved neurological outcomes
- Consider for witnessed VF/VT arrest

## Quality Improvement in Respiratory Emergencies

### Asthma Care Metrics

- Time to first bronchodilator
- Use of systemic corticosteroids
- Discharge on ICS if not previously prescribed
- Asthma action plan provided
- Follow-up appointment scheduled

### PE Care Metrics

- Time to anticoagulation
- Appropriate risk stratification (PESI/sPESI)
- Use of thrombolysis in massive PE
- Outpatient management of low-risk PE

### Systems-Level Interventions

**Reducing intubation delays:**
- Pre-assembled RSI kits
- Difficult airway equipment readily available
- Simulation training
- Video laryngoscopy as default

**Reducing mortality:**
- Sepsis bundles for pneumonia
- Early goal-directed therapy protocols
- Rapid response teams for deteriorating patients
- ARDS screening and lung protective ventilation protocols

## Future Directions

### Artificial Intelligence Applications

- Automated detection of respiratory deterioration
- Prediction of NIV failure
- Optimization of ventilator settings
- Image analysis for PE detection

### Point-of-Care Diagnostics

- Rapid pathogen identification (FilmArray, etc.)
- Biomarker-guided therapy
- Portable ultrasound for rapid diagnosis

### Personalized Medicine

- Biomarker-guided steroid therapy in ARDS
- Phenotyping of ARDS (hyperinflammatory vs hypoinflammatory)
- Targeted biologic therapy selection in asthma`,
      keyTerms: [
        { term: 'HFNC', definition: 'High-Flow Nasal Cannula; delivers heated humidified oxygen at high flow rates providing modest PEEP effect and dead space washout' },
        { term: 'PROSEVA', definition: 'Landmark trial demonstrating mortality benefit of prone positioning in severe ARDS' },
        { term: 'ECCO2R', definition: 'Extracorporeal Carbon Dioxide Removal; low-flow extracorporeal circuit primarily removing CO2 to allow ultra-protective ventilation' },
        { term: 'ACO', definition: 'Asthma-COPD Overlap; condition with features of both asthma and COPD, requiring combined treatment approach' },
        { term: 'TTM', definition: 'Targeted Temperature Management; controlled cooling post-cardiac arrest to improve neurological outcomes' },
        { term: 'biomarker-guided therapy', definition: 'Using biological markers to personalize treatment decisions, emerging in ARDS and severe asthma management' },
      ],
      clinicalNotes: `Expert-level considerations:

1. **HFNC vs NIV:** In hypoxemic respiratory failure, HFNC may be superior to NIV for patient comfort and potentially outcomes. In hypercapnic failure (COPD), NIV remains first-line.

2. **Prone positioning:** Should be implemented early in moderate-severe ARDS (P/F <150). Requires trained team, 16+ hours daily for benefit.

3. **Steroid timing in ARDS:** Early steroids (days 1-7) beneficial; late steroids (after day 14) may worsen outcomes.

4. **VV-ECMO:** Consider referral to ECMO center for refractory hypoxemia (P/F <80) despite optimization. EOLIA showed mortality benefit as rescue therapy.

5. **Outpatient PE management:** Low-risk PE (sPESI 0, no other concerning features) can be safely managed outpatient with DOACs, reducing healthcare costs and patient burden.`,
    },
  },

  media: [
    {
      id: 'signs-respiratory-distress',
      type: 'diagram',
      filename: 'signs-respiratory-distress.svg',
      title: 'Signs of Respiratory Distress',
      description: 'Visual guide to recognizing respiratory distress in adults and children',
    },
    {
      id: 'heimlich-maneuver-steps',
      type: 'diagram',
      filename: 'heimlich-maneuver-steps.svg',
      title: 'Heimlich Maneuver Steps',
      description: 'Step-by-step guide to performing abdominal thrusts for choking',
    },
    {
      id: 'epipen-administration',
      type: 'diagram',
      filename: 'epipen-administration.svg',
      title: 'Epinephrine Auto-Injector Use',
      description: 'Proper technique for administering an epinephrine auto-injector',
    },
  ],

  citations: [
    {
      id: 'gina-guidelines-2023',
      type: 'article',
      title: 'Global Initiative for Asthma (GINA) Guidelines',
      source: 'GINA',
      url: 'https://ginasthma.org/',
      accessedDate: '2026-01-24',
    },
    {
      id: 'anaphylaxis-guidelines',
      type: 'article',
      title: 'World Allergy Organization Anaphylaxis Guidance',
      authors: ['Cardona, V.', 'et al.'],
      source: 'World Allergy Organization Journal',
      accessedDate: '2026-01-24',
    },
    {
      id: 'ards-net-protocol',
      type: 'article',
      title: 'Ventilation with Lower Tidal Volumes as Compared with Traditional Tidal Volumes for Acute Lung Injury and ARDS',
      source: 'New England Journal of Medicine',
      accessedDate: '2026-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'system-respiratory', targetType: 'system', relationship: 'related', label: 'Respiratory System' },
    { targetId: 'emergency-cardiac-warning-signs', targetType: 'topic', relationship: 'sibling', label: 'Cardiac Emergencies' },
    { targetId: 'emergency-first-response', targetType: 'topic', relationship: 'see-also', label: 'First Response Actions' },
    { targetId: 'emergency-when-to-seek-care', targetType: 'topic', relationship: 'see-also', label: 'When to Seek Care' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['emergency medicine', 'patient education', 'warning signs', 'first aid', 'pulmonology'],
    keywords: ['asthma', 'anaphylaxis', 'choking', 'ARDS', 'respiratory failure', 'dyspnea', 'pulmonary embolism'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency medicine', 'pulmonology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default respiratoryEmergencies;
