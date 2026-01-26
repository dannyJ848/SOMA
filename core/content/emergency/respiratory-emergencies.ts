/**
 * Respiratory Emergencies
 *
 * Covers acute respiratory failure, asthma exacerbation, COPD exacerbation,
 * pulmonary embolism, and other urgent respiratory conditions.
 */

import { EducationalContent } from '../types';

export const respiratoryEmergenciesContent: EducationalContent = {
  id: 'emergency-respiratory',
  type: 'topic',
  name: 'Respiratory Emergencies',
  alternateNames: ['Acute Respiratory Failure', 'Breathing Emergency', 'Respiratory Distress', 'Airway Emergency'],

  levels: {
    1: {
      level: 1,
      summary: 'Respiratory emergencies happen when someone cannot breathe well enough to get oxygen to their body, which can be life-threatening and needs immediate medical attention.',
      explanation: `Breathing is something your body does automatically, all day and night. You don't usually think about it until something goes wrong. When breathing becomes difficult, it can be very scary and dangerous.

**What is a Respiratory Emergency?**

A respiratory emergency happens when:
- You cannot get enough air into your lungs
- Your lungs cannot get enough oxygen into your blood
- Your body cannot get rid of carbon dioxide properly

Without enough oxygen, your body's organs cannot work properly. Your brain, heart, and other organs need a constant supply of oxygen.

**Common Respiratory Emergencies:**

**Asthma Attack:**
- Airways tighten and get swollen
- Makes it hard to breathe air out
- Causes wheezing (whistling sound when breathing)
- Coughing and chest tightness
- Can be triggered by allergies, exercise, or smoke

**COPD Flare-up:**
- COPD is a chronic lung disease, usually from smoking
- Flare-ups make breathing suddenly much worse
- More coughing, more mucus, more shortness of breath
- Very common reason for emergency visits

**Pulmonary Embolism:**
- Blood clot in the lungs
- Usually comes from a clot in the leg (DVT)
- Sudden shortness of breath
- Chest pain that's worse when breathing
- Can be life-threatening

**Pneumonia:**
- Infection in the lungs
- Causes fever, cough, difficulty breathing
- Can be caused by bacteria or viruses
- Very serious in older adults and people with health problems

**Lung problems from other conditions:**
- Heart failure can cause fluid in lungs
- Allergic reactions can swell airways shut
- Choking on food can block airways
- Injuries to chest can damage lungs

**Warning Signs - Call 911:**
- Breathing so hard you cannot speak in full sentences
- Lips or fingernails turning blue or gray
- Chest pain
- Feeling like you might pass out
- Confusion or extreme sleepiness (from lack of oxygen)
- Wheezing that doesn't improve with inhaler

**What Helpers Can Do:**
- Call 911 immediately
- Help the person sit up (lying down makes breathing harder)
- If they have an inhaler, help them use it
- Stay calm and reassure them
- If they stop breathing, start CPR

**How Doctors Help:**
- Give oxygen through a mask or tubes
- Use medicines to open airways
- Give treatments to reduce swelling
- Sometimes use a breathing machine (ventilator)
- Treat the underlying cause (like infection or clot)

**Prevention:**
- Take your medicines as prescribed, especially inhalers
- Do not smoke or quit smoking
- Get vaccinated for flu and pneumonia
- Avoid things that trigger breathing problems
- Tell your doctor right away if breathing is getting worse

Remember: Breathing problems can get worse quickly. If you're struggling to breathe, getting help fast is important. Don't wait to see if it gets better on its own.`,
      keyTerms: [
        { term: 'asthma', definition: 'A condition where airways become narrow and swollen, making breathing difficult' },
        { term: 'COPD', definition: 'Chronic Obstructive Pulmonary Disease; lung disease that makes breathing hard, usually from smoking' },
        { term: 'oxygen', definition: 'The gas in air that your body needs to survive; carried by blood to all organs' },
        { term: 'wheezing', definition: 'A whistling sound when breathing, usually because airways are narrowed' },
        { term: 'inhaler', definition: 'A handheld device that delivers medicine directly to the lungs to help open airways' },
        { term: 'pulmonary embolism', definition: 'A blood clot that travels to the lungs and blocks blood flow', pronunciation: 'PUL-moh-ner-ee EM-bo-lizm' },
      ],
      analogies: [
        'Your airways are like a drinking straw - if something pinches it, it becomes very hard to pull air through.',
        'Oxygen is like fuel for your body - without it, your organs cannot run properly.',
        'Asthma makes airways act like a pinched straw, while COPD is like the straw is partially clogged.',
      ],
      examples: [
        'A child with asthma starts wheezing after playing with a cat.',
        'An elderly smoker suddenly cannot catch their breath.',
        'Someone after surgery suddenly has chest pain and trouble breathing.',
      ],
    },
    2: {
      level: 2,
      summary: 'Respiratory emergencies encompass acute respiratory failure, asthma exacerbation, COPD exacerbation, pulmonary embolism, pneumonia, and upper airway obstruction, all requiring rapid assessment and intervention to secure oxygenation and ventilation.',
      explanation: `## Understanding Respiratory Failure

Your respiratory system has two main jobs:
1. **Oxygenation**: Getting oxygen into your blood
2. **Ventilation**: Removing carbon dioxide from your body

**Respiratory failure** happens when one or both of these jobs fail.

**Types of Respiratory Failure:**

**Type 1 (Hypoxemic):**
- Low oxygen levels (hypoxemia)
- Normal or low carbon dioxide
- Problem: Oxygen cannot get into blood
- Causes: Pneumonia, pulmonary edema, pulmonary embolism, ARDS

**Type 2 (Hypercapnic):**
- Low oxygen AND high carbon dioxide (hypercapnia)
- Problem: Not breathing enough to clear CO2
- Causes: COPD exacerbation, drug overdose, neuromuscular disease

## Common Respiratory Emergencies

**Asthma Exacerbation:**

An asthma attack is a sudden worsening of asthma symptoms caused by tightening of muscles around the airways (bronchospasm), inflammation and swelling of the airway lining, and increased mucus production.

**Symptoms:**
- Shortness of breath
- Wheezing (expiratory more than inspiratory)
- Cough, especially at night or with exertion
- Chest tightness

**Red Flags:**
- Cannot speak in full sentences
- Using accessory muscles (neck and chest muscles to breathe)
- "Silent chest" (so tight no air movement)
- Altered mental status
- Oxygen saturation <92%

**COPD Exacerbation:**

COPD includes chronic bronchitis and emphysema, usually from smoking. An exacerbation is a sudden worsening beyond normal day-to-day variation.

**Symptoms:**
- Increased shortness of breath
- Increased cough
- Increased sputum production
- Change in sputum color (yellow/green)
- Swelling in legs or ankles (if cor pulmonale present)

**Red Flags:**
- Confusion or sleepiness (CO2 retention)
- Cannot complete sentences
- Respirations >24/min
- Home oxygen needs increasing

**Pulmonary Embolism (PE):**

A blood clot that travels to the lungs, usually from a deep vein thrombosis (DVT) in the legs.

**Symptoms:**
- Sudden onset shortness of breath
- Pleuritic chest pain (worse with breathing)
- Tachycardia (fast heart rate)
- May cough up blood
- DVT signs: Swollen, tender, red leg

**Risk Factors:**
- Recent surgery or immobilization
- Cancer
- Pregnancy or postpartum
- Birth control pills
- Long travel
- Previous DVT/PE

**Pneumonia:**

Infection of the lung tissue causing the air sacs (alveoli) to fill with fluid or pus.

**Symptoms:**
- Fever
- Cough with phlegm
- Shortness of breath
- Chest pain
- Fatigue

**High-risk patients:**
- Elderly (>65)
- Infants and young children
- People with chronic diseases (COPD, heart failure, diabetes)
- Weakened immune system

**Upper Airway Obstruction:**

Blockage of the upper airway can be partial or complete.

**Causes:**
- Foreign body (choking)
- Anaphylaxis (allergic reaction)
- Angioedema (swelling, often from ACE inhibitors)
- Epiglottitis (infection, especially in children)
- Croup (viral infection in children)

**Signs:**
- Stridor (high-pitched sound when breathing in)
- Inability to speak
- Drooling (with epiglottitis)
- Increased work of breathing

## Assessment of Breathing Difficulty

**Look:**
- Respiratory rate (normal 12-20 for adults)
- Use of accessory muscles
- Chest movement pattern
- Skin color (cyanosis = blue/gray)
- Ability to speak

**Listen:**
- Breath sounds: wheezing, crackles, decreased sounds
- Stridor (upper airway obstruction)
- Ability to speak in full sentences

**Feel:**
- Tracheal deviation (tension pneumothorax)
- Chest wall movement
- Subcutaneous air (crepitus)

**Measure:**
- Oxygen saturation (SpO2): Normal ≥95%
- Peak flow (for asthma): Compare to personal best
- End-tidal CO2 (capnography)

**Key Vital Signs:**
- Respiratory rate: <10 or >24 is concerning
- Oxygen saturation: <92% on room air needs attention
- Heart rate: Tachycardia common with respiratory distress

## Initial Management

**General Principles:**
1. **Oxygen**: For hypoxemia (SpO2 <92%)
2. **Positioning**: Sit upright (improves breathing mechanics)
3. **Monitoring**: Continuous pulse oximetry
4. **Treat underlying cause**

**Oxygen Delivery:**

| Method | Flow Rate | FiO2 |
|--------|-----------|------|
| Nasal cannula | 1-6 L/min | 24-44% |
| Simple face mask | 6-10 L/min | 40-60% |
| Venturi mask | Precise | 24, 28, 31, 35, 40, 50% |
| Non-rebreather | 15 L/min | ~90% |

**For Asthma Exacerbation:**
- SABA (albuterol) inhaler or nebulizer: 4-8 puffs every 20 minutes
- Ipratropium (Atrovent) can be added for severe attacks
- Oral steroids (prednisone)
- Consider magnesium sulfate IV for severe cases
- Epinephrine IM if anaphylaxis component

**For COPD Exacerbation:**
- Controlled oxygen (target SpO2 88-92%) - careful not to worsen CO2 retention
- Bronchodilators (albuterol + ipratropium)
- Steroids
- Antibiotics if infection suspected
- Consider NIV (BiPAP) for CO2 retention

**For Pulmonary Embolism:**
- Oxygen for hypoxemia
- Anticoagulation (heparin)
- Thrombolytics for massive PE with hypotension
- Treat pain with analgesics

**For Pneumonia:**
- Oxygen for hypoxemia
- Antibiotics
- Fluids for dehydration
- Antipyretics for fever

## When to Call 911

**Immediate emergency:**
- Inability to speak in full sentences
- Blue/gray lips or fingernails
- Confusion or extreme fatigue
- Noisy breathing (stridor, wheezing) with distress
- Chest pain with breathing difficulty
- History of asthma with sudden worsening not improving with inhaler
- Choking and inability to breathe/cough

**Urgent evaluation needed:**
- Breathing difficulty that is getting worse
- Fever with breathing problems
- Worsening of chronic lung condition
- Breathing problems after starting new medication`,
      keyTerms: [
        { term: 'hypoxemia', definition: 'Low oxygen levels in the blood', pronunciation: 'high-pox-EE-mee-uh' },
        { term: 'hypercapnia', definition: 'High carbon dioxide levels in the blood', pronunciation: 'high-per-KAP-nee-uh' },
        { term: 'stridor', definition: 'High-pitched breathing sound indicating upper airway obstruction' },
        { term: 'wheezing', definition: 'Whistling sound from narrowed lower airways, usually when breathing out' },
        { term: 'accessory muscles', definition: 'Neck and chest muscles used when breathing is difficult' },
        { term: 'dyspnea', definition: 'Medical term for shortness of breath or difficulty breathing', pronunciation: 'DISP-nee-uh' },
        { term: 'SpO2', definition: 'Oxygen saturation measured by pulse oximetry; normal is 95-100%' },
      ],
      analogies: [
        'Type 1 respiratory failure is like having enough air but not enough windows for oxygen to get through.',
        'Type 2 respiratory failure is like not breathing deeply enough to clear the room of stuffy air.',
        'Stridor is like whistling through a tiny straw - it shows the airway is very narrowed.',
      ],
    },
    3: {
      level: 3,
      summary: 'Respiratory emergencies require systematic evaluation of oxygenation and ventilation, rapid identification of life-threatening conditions, and targeted interventions including oxygen therapy, bronchodilators, and respiratory support to prevent respiratory collapse.',
      explanation: `## Acute Respiratory Failure

**Definition:**
- PaO2 <60 mmHg (hypoxemic) OR
- PaCO2 >50 mmHg with pH <7.35 (hypercapnic) OR
- Respiratory rate >24 or <10 with signs of distress

**Pathophysiologic Classification:**

**Type 1 (Hypoxemic) Respiratory Failure:**
- PaO2 <60 mmHg with normal or low PaCO2
- Pathophysiology: V/Q mismatch or shunt
- Causes: Pneumonia, pulmonary edema (cardiogenic and non-cardiogenic), PE, ARDS
- A-a gradient increased

**Type 2 (Hypercapnic) Respiratory Failure:**
- PaO2 may be low with elevated PaCO2
- Pathophysiology: Alveolar hypoventilation
- Causes: COPD exacerbation, drug overdose (respiratory depression), neuromuscular disease, obesity hypoventilation
- A-a gradient normal or increased

**A-a Gradient Calculation:**
- A-a gradient = PAO2 - PaO2
- PAO2 = (FiO2 × 713) - (PaCO2 / 0.8)
- Normal: Age/4 + 4
- Increased: V/Q mismatch, shunt
- Normal: Hypoventilation, low FiO2

## Obstructive Lung Disease Exacerbations

**Asthma Pathophysiology:**
- Bronchospasm: Smooth muscle constriction
- Inflammation: Edema and inflammatory cell infiltration
- Mucus production: Plugs small airways
- Result: Airflow limitation, air trapping, increased work of breathing

**Asthma Severity Assessment:**

| Sign | Mild | Moderate | Severe | Respiratory Arrest Imminent |
|------|-------|----------|--------|---------------------------|
| Breath sounds | Wheezing end-expiratory | Wheezing entire expiratory | Loud wheezing or silent | Silent chest |
| Speech | Sentences | Phrases | Words | None |
| Respiratory rate | Increased | Increased | >30 | <10 or apnea |
| SpO2 | >95% | 92-95% | <92% | <90% |
| Pulse | <100 | 100-120 | >120 | Bradycardia |
| Mental status | Normal | Agitated | Confused | Obtunded |

**Asthma Treatment (Step-wise):**

**Initial (all patients):**
- SABA (albuterol) 4-8 puffs MDI with spacer OR 2.5-5 mg nebulized
- Oxygen to maintain SpO2 ≥92%
- Systemic corticosteroids (prednisone 40-50 mg or methylprednisolone 125 mg IV)

**Moderate to severe:**
- SABA every 20 minutes x3
- Add ipratropium bromide (0.5 mg nebulized) with albuterol
- Consider magnesium sulfate 2 g IV over 20 minutes
- Consider early BiPAP

**Severe/impending respiratory failure:**
- Continuous albuterol nebs (10-15 mg/hr)
- IV magnesium (2 g over 20 min)
- Consider IV terbutaline (off-label)
- Prepare for intubation

**COPD Exacerbation:**

**Triggers:**
- Infections (viral > bacterial)
- Air pollution
- Non-adherence to medications
- Heart failure

**ABG Interpretation in COPD:**
- Acute respiratory acidosis: Elevated PaCO2, low pH
- Chronic respiratory acidosis: Elevated PaCO2, near-normal pH (compensated)
- Acute on chronic: Elevated PaCO2, decreased pH from baseline

**COPD Treatment:**
- Controlled oxygen (target SpO2 88-92%)
- Short-acting bronchodilators (SABA + SAMA)
- Systemic corticosteroids (prednisone 40 mg daily x5 days)
- Antibiotics if purulent sputum or infiltrates on CXR
- Consider NIV for pH 7.25-7.35 and respiratory distress
- Intubation criteria: pH <7.25, mental status changes, exhaustion

## Pulmonary Embolism

**Pathophysiology:**
- Thrombus (usually from DVT) travels to pulmonary circulation
- Causes ventilation-perfusion mismatch
- Can cause right heart strain/failure in massive PE
- Large clots can cause sudden cardiovascular collapse

**Clinical Probability Assessment (Wells Criteria):**

| Factor | Points |
|--------|--------|
| DVT symptoms | 3 |
| PE as likely or more likely than alternative diagnosis | 3 |
| Heart rate >100 | 1.5 |
| Immobilization/surgery in previous 4 weeks | 1.5 |
| Previous DVT/PE | 1.5 |
| Hemoptysis | 1 |
| Cancer | 1 |

Score interpretation:
- 0-1: Low probability (1.3%)
- 2-6: Moderate probability (16.2%)
- >6: High probability (37.5%)

**Simplified PERC Rule (low risk patients):**
- Age <50
- HR <100
- SpO2 ≥95%
- No unilateral leg swelling
- No hemoptysis
- No recent surgery/trauma
- No prior DVT/PE
- No estrogen use

If all negative, D-dimer not needed (<2% risk of PE).

**Risk Stratification:**

| Risk | Hemodynamics | RV Strain | Biomarkers |
|------|--------------|-----------|------------|
| High risk | Hypotensive | Yes | Elevated troponin/BNP |
| Intermediate risk | Stable | May be present | May be elevated |
| Low risk | Stable | No | Normal |

**Treatment:**
- Anticoagulation (heparin, LMWH, or fondaparinux)
- Thrombolytics for massive PE with hypotension
- Catheter-directed thrombolysis for high-risk patients with bleeding risk
- Inferior vena cava filter if contraindication to anticoagulation

## Pneumonia Assessment

**CURB-65 Severity Score (1 point each):**
- Confusion
- Urea >19 mg/dL (7 mmol/L)
- Respiratory rate ≥30
- Blood pressure: systolic <90 or diastolic ≤60
- Age ≥65

Score interpretation:
- 0-1: Outpatient treatment
- 2: Hospital admission
- 3+: ICU consideration

**Community vs Hospital-Acquired:**
- CAP: Presenting ≤48 hours after admission
- HAP: Developing >48 hours after admission
- VAP: HAP in mechanically ventilated patient

## Upper Airway Emergencies

**Causes of Stridor:**

**Supraglottic (Epiglottitis):**
- Severe sore throat, difficulty swallowing
- Tripod position (sitting forward, arms supporting)
- Drooling, muffled voice
- Toxic appearance
- DO NOT agitate (may cause airway occlusion)
- Airway management in OR

**Glottic (Vocal Cord Dysfunction):**
- Stridor, hoarseness
- May be triggered by exercise or irritants
- Diagnosis by laryngoscopy

**Subglottic (Croup):**
- Barking cough, stridor
- Often viral (parainfluenza)
- Children 6 months to 3 years
- Treat with nebulized epinephrine
- Steroids (dexamethasone)

**Foreign Body Aspiration:**
- Sudden onset, often with eating
- Choking episode
- Unilateral wheezing or decreased breath sounds
- Heimlich maneuver if complete obstruction
- Bronchoscopy for removal

## Non-Invasive Ventilation

**BiPAP (Bilevel Positive Airway Pressure):**
- IPAP: Inspiratory support (helps patient breathe in)
- EPAP: Expiratory support (keeps alveoli open)
- Indications: COPD exacerbation, cardiogenic pulmonary edema
- Contraindications: Unresponsive, unable to protect airway, vomiting

**CPAP (Continuous Positive Airway Pressure):**
- Single pressure throughout respiratory cycle
- Useful for pulmonary edema, obstructive sleep apnea

**NIV Failure Signs:**
- Increasing respiratory rate
- Wearing mask poorly
- Worsening ABG
- Altered mental status
- Hemodynamic instability`,
      keyTerms: [
        { term: 'V/Q mismatch', definition: 'Ventilation-perfusion mismatch; areas of lung getting air but not blood flow or vice versa' },
        { term: 'shunt', definition: 'Blood passing through lungs without participating in gas exchange' },
        { term: 'A-a gradient', definition: 'Difference between alveolar and arterial oxygen; helps classify respiratory failure type' },
        { term: 'air trapping', definition: 'Air entering lungs but not fully exiting; causes hyperinflation in obstructive disease' },
        { term: 'silent chest', definition: 'Asthma so severe that no air movement is heard despite respiratory effort; sign of imminent arrest' },
        { term: 'D-dimer', definition: 'Blood test that helps rule out blood clots; normal means low likelihood of PE' },
        { term: 'intubation', definition: 'Placing a tube into the trachea to secure airway and connect to ventilator' },
      ],
      clinicalNotes: 'In asthma, the "worst sounds" may indicate the worst obstruction - the silent chest. Sedation may worsen respiratory status in COPD.',
    },
    4: {
      level: 4,
      summary: 'Management of respiratory emergencies requires advanced understanding of respiratory physiology, gas exchange abnormalities, and evidence-based protocols for specific conditions, with careful attention to oxygen titration, bronchodilator response, and decision points for invasive mechanical ventilation.',
      explanation: `## Advanced Respiratory Physiology

**Gas Exchange and Transport:**

**Oxygen Cascade:**
- FiO2: 21% at room air
- Barometric pressure: 760 mmHg at sea level
- PIO2 = (760 - 47) × FiO2 = 150 mmHg (room air)
- PAO2 = PIO2 - (PaCO2 / 0.8) = 100 mmHg
- PaO2 ≈ 80-100 mmHg (normal A-a gradient)
- Tissue PO2: 40 mmHg in mixed venous blood

**Oxygen-Hemoglobin Dissociation Curve:**
- Sigmoid relationship between PaO2 and SaO2
- P50 = 26.6 mmHg (normal)
- Left shift: Increased affinity (alkalosis, hypothermia, 2,3-DPG deficiency)
- Right shift: Decreased affinity (acidosis, hyperthermia, 2,3-DPG increase, chronic hypoxia)

**CO2 Transport:**
- Dissolved: 10%
- Carbamino compounds: 30%
- Bicarbonate: 60%

**Respiratory Acid-Base Compensation:**
- Acute respiratory acidosis: HCO3 increases by 1 for every 10 mmHg PaCO2
- Chronic respiratory acidosis: HCO3 increases by 4 for every 10 mmHg PaCO2

## Advanced Asthma Management

**Pathophysiology in Detail:**
- Early phase: IgE-mediated mast cell degranulation → histamine, leukotrienes, prostaglandins
- Late phase: Eosinophil and neutrophil infiltration → airway inflammation
- Airway remodeling: Chronic inflammation leads to fibrosis

**Risk Factors for Fatal Asthma:**
- History of near-fatal asthma (intubation, ICU admission)
- Two or more hospitalizations in past year
- Three or more ED visits in past year
- Use of >2 canisters of SABA per month
- Poor adherence to medications
- Psychosocial problems
- Illicit drug use
- Sensitivity to alternaria mold

**Refractory Asthma:**
- Define as persistent symptoms despite high-dose ICS + LABA
- Consider alternative diagnoses (VCD, tracheomalacia, bronchiectasis)
- Evaluate for refractory phenotypes (eosinophilic, neutrophilic)
- Consider biologic therapies (omalizumab, mepolizumab, benralizumab, dupilumab)

**Status Asthmaticus:**
- Severe asthma unresponsive to initial treatment
- Risk of respiratory failure and death
- Continuous nebulized albuterol (10-15 mg/hr)
- IV magnesium sulfate (2 g)
- Consider IV ketamine (dissociative, bronchodilatory)
- Heliox (helium-oxygen mixture) reduces turbulent flow
- Intubation is LAST resort (difficult ventilation due to air trapping)

## COPD Exacerbation Advanced

**Phenotypes:**
- Frequent exacerbator: ≥2 exacerbations/year
- Chronic bronchitis dominant: Chronic cough and sputum
- Emphysema dominant: Dyspnea, weight loss, pink puffer
- Overlap with asthma (ACO): Features of both

**GOLD Classification:**
- Group A: Low symptoms, low risk (0-1 exacerbation/year)
- Group B: High symptoms, low risk
- Group C: Low symptoms, high risk (≥2 exacerbations/year)
- Group D: High symptoms, high risk

**Oxygen Therapy in COPD:**
- Target SpO2 88-92% (avoid overtreatment)
- Controlled oxygen: 24% Venturi mask initially
- Risk of hypercapnia: V/Q mismatch, Haldane effect, decreased respiratory drive

**Alpha-1 Antitrypsin Deficiency:**
- Genetic cause of emphysema (panacinar, lower lobes)
- Screen with AAT level
- Replacement therapy available
- Smoking dramatically accelerates disease

## Pulmonary Embolism Deep Dive

**Virchow's Triad (Risk Factors):**
- Stasis: Immobilization, heart failure, travel
- Hypercoagulability: Cancer, pregnancy, thrombophilia
- Endothelial injury: Surgery, trauma, indwelling catheters

**Right Ventricular Failure in PE:**
- Sudden increase in pulmonary vascular resistance
- RV pressure overload
- Septal shift toward LV (decreases LV filling)
- Cardiac output decreases
- Cardiovascular collapse in massive PE

**Diagnostic Imaging:**

**CT Pulmonary Angiography:**
- Gold standard for PE diagnosis
- Sensitivity and specificity >95%
- Signs: Filling defect, arterial cutoff
- Alternative: V/Q scan (useful in renal failure/pregnancy)

**Echocardiography in PE:**
- RV hypokinesis (McConnell sign: RV free wall hypokinesis with apical sparing)
- RV dilation (RV/LV ratio >1)
- Septal flattening (D-shaped LV)
- Pulmonary hypertension

**Thrombolytic Indications:**
- Massive PE with sustained hypotension
- High-risk PE with right heart strain
- Consider for submassive PE with poor prognostic signs

## ARDS (Acute Respiratory Distress Syndrome)

**Berlin Definition (all criteria required):**
- Acute onset within 1 week
- Bilateral opacities on imaging not fully explained by effusions, collapse, nodules
- Respiratory failure not fully explained by cardiac failure or fluid overload
- Impaired oxygenation (P/F ratio)

| Severity | P/F Ratio | PEEP |
|----------|-----------|------|
| Mild | 201-300 | ≥5 |
| Moderate | 101-200 | ≥5 |
| Severe | ≤100 | ≥5 |

**ARDS Management Principles:**
- Low tidal volume ventilation (6 mL/kg predicted body weight)
- Plateau pressure <30 cm H2O
- Permissive hypercapnia (allow elevated PaCO2)
- Higher PEEP (keep alveoli open)
- Conservative fluid management
- Prone positioning for severe ARDS
- Neuromuscular blockade (cisatracurium) for early severe ARDS
- Consider ECMO for refractory cases

## Mechanical Ventilation Basics

**Indications:**
- Respiratory arrest or impending arrest
- Hypoxemic respiratory failure refractory to oxygen/NIV
- Hypercapnic respiratory failure with acidosis
- Inability to protect airway
- Decreased level of consciousness

**Initial Ventilator Settings:**
- Mode: AC/VC (assist-control/volume control) or SIMV
- Tidal volume: 6-8 mL/kg PBW
- Respiratory rate: 12-16/min
- FiO2: 100% initially, titrate down
- PEEP: 5 cm H2O initially, titrate

**Predicted Body Weight:**
- PBW male = 50 + 0.91 × (height in cm - 152.4)
- PBW female = 45.5 + 0.91 × (height in cm - 152.4)

**Weaning from Ventilator:**
- Daily spontaneous breathing trial (SBT)
- Evaluate for readiness (resolved underlying cause, adequate oxygenation)
- SBT duration: 30-120 minutes
- Extubation if SBT successful

**ABG Interpretation for Ventilator Management:**
- PaO2/FiO2 ratio: Assess oxygenation
- PaCO2: Assess ventilation
- pH: Assess adequacy of ventilation
- Base excess: Metabolic component`,
      keyTerms: [
        { term: 'P/F ratio', definition: 'PaO2 divided by FiO2; measures oxygenation efficiency; <300 indicates ALI, <200 ARDS' },
        { term: 'plateau pressure', definition: 'Pressure in alveoli at end-inspiratory pause; should be <30 to prevent barotrauma' },
        { term: 'permissive hypercapnia', definition: 'Accepting elevated PaCO2 to avoid ventilator-induced lung injury; pH >7.20 acceptable' },
        { term: 'McConnell sign', definition: 'RV free wall hypokinesis with preserved apical motion; specific for PE' },
        { term: 'Haldane effect', definition: 'Oxygen binding to hemoglobin displaces CO2; contributes to CO2 retention with oxygen therapy' },
        { term: 'ACO', definition: 'Asthma-COPD Overlap; patients with features of both asthma and COPD' },
      ],
      clinicalNotes: 'The "silent chest" in asthma is an ominous sign indicating severe airflow obstruction. Proceed to intubation with caution - these patients are very difficult to ventilate due to air trapping.',
    },
    5: {
      level: 5,
      summary: 'Evidence-based management of respiratory emergencies integrates advanced physiologic monitoring, validated risk stratification tools, and guideline-directed protocols, with emphasis on appropriate triage, oxygen titration, and individualized ventilator strategies to optimize outcomes.',
      explanation: `## Evidence-Based Protocols and Guidelines

**Asthma Exacerbation: 2021 GINA and 2020 NAEPP Updates:**

**Early Management:**
- SABA every 20 minutes x3 (4-8 puffs MDI with spacer preferred over nebulizer)
- Add ipratropium for severe exacerbations (evidence from meta-analysis)
- Systemic corticosteroids within 1 hour of presentation
- Consider single-dose IM dexamethasone (6-12 mg) as alternative to 5-day prednisone

**Hospital Admission Criteria:**
- PEF or FEV1 <40% after initial treatment
- SpO2 <92% on room air
- Persisting symptoms after 3-4 hours
- Poor social situation or inability to obtain medications

**ICU Admission Indications:**
- PEF or FEV1 <25-30% predicted
- SpO2 <92% despite supplemental oxygen
- Rising PaCO2 or mental status changes
- Intubation required

**Discharge Criteria:**
- PEF or FEV1 ≥60-70% predicted
- Normal SpO2
- Physical exam normal or significantly improved
- Relapse plan provided

**COPD Exacerbation: 2023 GOLD Updates:**

**Antibiotic Selection:**
- Simple bronchitis: Amoxicillin-clavulanate, macrolide, or doxycycline
- Risk of Pseudomonas: Consider anti-pseudomonal (if prior culture or frequent antibiotics)
- Duration: 5-7 days (evidence supports shorter courses)

**Steroid Therapy:**
- Prednisone 40 mg daily x5 days (evidence: longer not better)
- Consider IV for inability to tolerate oral

**NIV in COPD Exacerbation:**
- Strong evidence for mortality benefit
- Reduced intubation rate by ~50%
- Reduced hospital stay by ~3 days
- Contraindications: Vomiting, aspiration risk, respiratory arrest

**Pulmonary Embolism: 2019 ESC and 2016 ACCP Guidelines:**

**Diagnostic Pathway:**
- Clinical probability assessment (Wells or Geneva score)
- D-dimer for low probability (high sensitivity)
- CT pulmonary angiography for high probability or positive D-dimer
- Consider V/Q scan if CT contraindicated (renal failure, contrast allergy, pregnancy)

**Risk-Adapted Management:**

| Risk | Presentation | Management |
|------|--------------|------------|
| High (Massive) | Hypotension, shock | Thrombolysis or embolectomy |
| Intermediate (Submassive) | RV strain + troponin | Anticoagulation ± thrombolysis |
| Low | Normal RV, normal troponin | Anticoagulation, early discharge |

**Home Treatment (HESTIA criteria):**
- Hemodynamically stable
- No significant hypoxia (SpO2 >90% on room air)
- No significant bleeding risk
- No severe pain requiring IV opioids
- No social limitations for outpatient treatment

**Anticoagulation Duration:**
- Provoked PE: 3 months
- Unprovoked PE: At least 3 months, then reassess
- High recurrence risk: Extended anticoagulation

**DOACs vs VKA for PE:**
- DOACs preferred for most patients (lower bleeding, similar efficacy)
- Warfarin for cancer, antiphospholipid syndrome, severe renal failure

**Pneumonia: 2019 IDSA/ATS Guidelines:**

**Severity Assessment:**
- CURB-65 or PSI (Pneumonia Severity Index)
- Procalcitonin can help distinguish bacterial vs viral (limited utility)
- Biomarkers (procalcitonin, CRP) may help determine duration

**Antibiotic Selection (CAP):**
- Healthy outpatient without comorbidities: Amoxicillin OR doxycycline
- Comorbidities: Amoxicillin-clavulanate OR respiratory fluoroquinolone
- High risk for MRSA or Pseudomonas: Add coverage accordingly

**Duration:**
- Uncomplicated CAP: 5 days (patient has been afebrile for 48-72 hours)
- Clinical stability more important than fixed duration

## Advanced Ventilator Strategies

**ARDSNet Ventilation (ARDS Network Protocol):**
- Tidal volume: 6 mL/kg PBW
- Plateau pressure goal: <30 cm H2O
- PEEP titration based on FiO2 requirements

| FiO2 | PEEP | FiO2 | PEEP |
|------|------|------|------|
| 0.3 | 5 | 0.6 | 10 |
| 0.4 | 5 | 0.7 | 12 |
| 0.4 | 8 | 0.8 | 14 |
| 0.5 | 8 | 0.9 | 16 |
| 0.5 | 10 | 1.0 | 18 |

**Prone Positioning (PROSEVA Trial):**
- Mortality benefit in severe ARDS (P/F <150)
- 16 hours/day prone, 8 hours supine
- Complications: Pressure ulcers, airway edema, line dislodgement

**Neuromuscular Blockade (ACURASYS Trial):**
- Cisatracurium for 48 hours in early severe ARDS
- Improved adjusted survival
- Reduced barotrauma

**ECMO for ARDS (EOLIA Trial):**
- ECMO did NOT significantly reduce mortality
- Trend toward benefit
- Crossover from control to ECMO common
- Consider in refractory cases

## Special Situations

**Obesity Hypoventilation Syndrome:**
- BMI >30, daytime hypercapnia, sleep disordered breathing
- High risk of respiratory failure
- Optimize with weight loss, PAP therapy

**Neuromuscular Respiratory Failure:**
- Guillain-Barré, myasthenia gravis, ALS
- Vital capacity <15-20 mL/kg: Intubate
- NIPV may be bridge to recovery

**Sickle Cell Disease with Acute Chest Syndrome:**
- Pain, fever, cough, hypoxia
- Aggressive hydration, analgesia
- Exchange transfusion for severe cases
- Antibiotics for infection

**COVID-19 Respiratory Failure:**
- Hypoxemic respiratory failure with relative respiratory comfort ("happy hypoxia")
- Proning (awake) improves oxygenation
- High PEEP may worsen lung compliance in some
- NIV use controversial (risk of delayed intubation)
- Steroids (dexamethasone) reduce mortality in severe disease
- Antiviral therapy (remdesivir) for hospitalized patients requiring oxygen

## Quality Metrics

**Time-Sensitive Metrics:**
- Antibiotics for sepsis: <3 hours from presentation
- Antibiotics for CAP: <4 hours from presentation
- Time to appropriate oxygen therapy: <30 minutes
- Time to bronchodilator for asthma: <15 minutes

**Process Metrics:**
- Use of NIV for COPD exacerbation
- Smoking cessation counseling
- Vaccination status review
- Discharge with appropriate medications
- Follow-up arranged

**Outcome Metrics:**
- Hospital mortality for respiratory failure
- Unplanned intubation after NIV failure
- ICU readmission after respiratory discharge
- 30-day readmission for COPD/asthma exacerbation
- Patient-reported outcomes (dyspnea scores)

## Future Directions

**Personalized Medicine:**
- Pharmacogenomics for beta-agonist response
- Biomarker-guided therapy for asthma (eosinophils, FeNO)
- Phenotype-specific treatment in COPD

**New Therapies:**
- Biologics for severe asthma (anti-IL-5, anti-IL-4R, anti-IgE)
- Antifibrotic therapy for pulmonary fibrosis
- Gene therapy for cystic fibrosis
- Novel anticoagulants for VTE

**Telemedicine for Respiratory Care:**
- Remote monitoring of chronic lung disease
- Home spirometry
- Tele-rehabilitation for pulmonary rehab`,
      keyTerms: [
        { term: 'NAEPP', definition: 'National Asthma Education and Prevention Program; issues US asthma guidelines' },
        { term: 'GOLD', definition: 'Global Initiative for Chronic Obstructive Lung Disease; issues COPD guidelines' },
        { term: 'HESTIA criteria', definition: 'Set of criteria to identify low-risk PE patients suitable for home treatment' },
        { term: 'DOAC', definition: 'Direct oral anticoagulant; newer blood thinners including apixaban, rivaroxaban' },
        { term: 'happy hypoxia', definition: 'Severe hypoxemia without dyspnea; seen in some COVID-19 patients' },
        { term: 'FeNO', definition: 'Fractional exhaled Nitric Oxide; biomarker for eosinophilic airway inflammation in asthma' },
      ],
      clinicalNotes: `Key Clinical Pearls for Respiratory Emergencies:

1. **Listen to the patient:** "I can't breathe" is concerning; "I can't catch my breath" is more urgent
2. **Look at the work of breathing:** Accessory muscle use, tripod positioning, ability to speak
3. **Oxygen is a drug:** Titrate to target (88-92% for COPD, ≥94% for most others)
4. **Don't rely on SpO2 alone:** PaCO2 can rise dangerously with normal SpO2 (hypercapnic respiratory failure)
5. **Asthma: The noisiest wheezing may be the best; the silent chest is the most dangerous**
6. **COPD: They live with high CO2; look for change from baseline, not absolute number**
7. **PE: Think of it in atypical presentations (syncope, arrhythmia, unexplained tachycardia)**
8. **NIV timing matters:** Earlier is better; don't wait until intubation is inevitable
9. **Post-extubation stridor:** Consider steroids before extubation in high-risk patients
10. **Discharge planning:** Ensure patient has medications, understands them, and has follow-up`,
    },
  },

  media: [
    {
      id: 'respiratory-failure-types',
      type: 'diagram',
      filename: 'respiratory-failure-types.svg',
      title: 'Types of Respiratory Failure',
      description: 'Type 1 vs Type 2 respiratory failure pathophysiology',
    },
    {
      id: 'asthma-treatment-algorithm',
      type: 'diagram',
      filename: 'asthma-exacerbation-algorithm.svg',
      title: 'Asthma Exacerbation Management',
      description: 'Stepwise treatment approach for asthma exacerbations',
    },
    {
      id: 'venturi-mask-settings',
      type: 'diagram',
      filename: 'venturi-mask-oxygen-settings.svg',
      title: 'Venturi Mask Oxygen Delivery',
      description: 'Flow rates and FiO2 for controlled oxygen therapy',
    },
  ],

  citations: [
    {
      id: 'gina-2021',
      type: 'article',
      title: '2021 GINA Report: Global Strategy for Asthma Management and Prevention',
      authors: ['Global Initiative for Asthma'],
      source: 'GINA',
      url: 'https://ginasthma.org',
    },
    {
      id: 'gold-2023',
      type: 'article',
      title: '2023 GOLD Report: Global Strategy for the Diagnosis, Management, and Prevention of COPD',
      authors: ['Global Initiative for Chronic Obstructive Lung Disease'],
      source: 'GOLD',
      url: 'https://goldcopd.org',
    },
    {
      id: 'esc-pe-2019',
      type: 'article',
      title: '2019 ESC Guidelines for the Diagnosis and Management of Acute Pulmonary Embolism',
      source: 'European Heart Journal',
    },
    {
      id: 'idsa-pneumonia-2019',
      type: 'article',
      title: '2019 IDSA/ATS Guidelines for Community-Acquired Pneumonia',
      authors: ['Metlay, J.', 'et al.'],
      source: 'Clinical Infectious Diseases',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-approach-triage', targetType: 'topic', relationship: 'related', label: 'ED Approach and Triage' },
    { targetId: 'emergency-cardiac', targetType: 'topic', relationship: 'related', label: 'Cardiac Emergencies' },
    { targetId: 'condition-asthma', targetType: 'condition', relationship: 'related', label: 'Asthma' },
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['emergency medicine', 'pulmonology', 'critical care', 'respiratory failure'],
    keywords: ['asthma', 'COPD', 'PE', 'pneumonia', 'respiratory failure', 'NIV', 'intubation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'medicine', 'pulmonology'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default respiratoryEmergenciesContent;
