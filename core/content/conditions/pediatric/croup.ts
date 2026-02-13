/**
 * Croup - Pediatric Condition
 *
 * Comprehensive content on croup including diagnosis, steroids,
* nebulized epinephrine, and management guidelines.
 */

import { EducationalContent } from '../../types';

export const croup: EducationalContent = {
  id: 'condition-croup',
  type: 'condition',
  name: 'Croup',
  nameEs: 'Crup',
  alternateNames: ['Laryngotracheobronchitis', 'Viral Croup', 'Acute Laryngotracheobronchitis'],

  levels: {
    1: {
      level: 1,
      summary: 'Croup is a common childhood illness that causes a barking cough and noisy breathing. It happens when the voice box and windpipe get swollen from a virus. Most children recover at home, but some need medical care.',
      explanation: `## What is Croup?

Croup is an illness that causes swelling in the voice box (larynx) and windpipe (trachea). This swelling makes it hard for air to get through, causing a special barking cough and noisy breathing.

**Who Gets It:**
- Most common in children ages 6 months to 3 years
- Rare in children over 6 years old
- Most common in fall and winter
- Can happen more than once

**The Good News:**
- Most children recover at home
- Usually goes away in 3-7 days
- Serious problems are rare

## Warning Signs and Symptoms

**Common Signs:**

1. **Barking Cough**
   - Sounds like a seal barking
   - Often worse at night
   - The main sign of croup

2. **Noisy Breathing (Stridor)**
   - High-pitched sound when breathing in
   - Happens when child is upset or active
   - Usually not heard when child is calm

3. **Hoarse Voice**
   - Voice sounds raspy or weak
   - Child may lose voice temporarily

4. **Trouble Breathing**
   - Breathing faster than normal
   - Chest or neck sucks in when breathing
   - Nostrils flare open

5. **Fever**
   - Usually low-grade
   - May not have fever at all

**Croup is Often Worse at Night:**
- Cough and noisy breathing often get worse at bedtime
- This is normal and happens with croup
- Symptoms usually improve during the day

## How to Help Your Child at Home

**Things That Help:**

1. **Cool Mist**
   - Run a cool-mist humidifier in the bedroom
   - Sit in the bathroom with steam from the shower
   - Cool night air may also help

2. **Comfort Your Child**
   - Hold your child upright
   - Stay calm (your child reacts to your feelings)
   - Sing softly or read to distract them

3. **Fluids**
   - Offer plenty of fluids
   - Small, frequent drinks
   - Helps prevent dehydration

4. **Fever Medicine**
   - Acetaminophen (Tylenol) for babies over 3 months
   - Ibuprofen for babies over 6 months
   - Helps with fever and discomfort

**Things That DON'T Help:**
- Cough medicines (not safe for young children)
- Cold medicines (not safe for young children)
- Hot steam (can burn the child)

## When to Call the Doctor

Call the doctor if your child:
- Makes a high-pitched noise even when resting
- Has trouble breathing (chest or neck sucking in)
- Can't swallow or is drooling
- Has a fever over 104°F
- Seems very tired or hard to wake up
- Has blue or gray lips or fingernails

**Call 911 if:**
- Child stops breathing
- Lips or face turn blue
- Child looks very sick and struggles to breathe

## Medical Treatment

**Most Children Need:**
- A single dose of steroid medicine (dexamethasone)
- Helps reduce swelling
- Usually works within a few hours

**Some Children May Need:**
- A mist treatment with epinephrine medicine
- Given in the emergency room
- Works quickly to reduce swelling
- Child is watched for a few hours before going home

**Children with Severe Croup May Need:**
- Hospital observation for a few hours
- Oxygen if needed
- Rarely: Breathing tube help

## What to Expect

**Typical Course:**
- Day 1-2: Cold symptoms (runny nose, mild cough)
- Day 2-3: Barking cough and stridor develop (worse at night)
- Day 4-7: Gradual improvement
- Cough may last up to 2 weeks

**Children often get croup more than once:**
- Some children get it every time they have a cold
- Usually milder as child gets older
- Rarely happens after age 6

## Prevention

- Croup is caused by viruses, so it spreads easily
- Wash hands often
- Keep child away from sick people
- Teach children to cover coughs and sneezes
- No vaccine specifically for croup (but vaccines help prevent some viruses)`,
      keyTerms: [
        { term: 'croup', definition: 'A childhood illness that causes swelling in the voice box and windpipe, leading to a barking cough' },
        { term: 'stridor', definition: 'A high-pitched breathing sound heard when breathing in', pronunciation: 'STRIDE-or' },
        { term: 'larynx', definition: 'The voice box; contains the vocal cords', pronunciation: 'LAR-inks' },
        { term: 'trachea', definition: 'The windpipe; tube that carries air to the lungs', pronunciation: 'TRAY-kee-ah' },
        { term: 'dexamethasone', definition: 'A steroid medicine that reduces swelling; given for croup', pronunciation: 'dek-suh-METH-ah-zone' },
      ],
      analogies: [
        'The airway in croup is like a straw with a narrow opening - air has to squeeze through, making noise.',
        'Croup cough sounds like a seal barking because the swollen voice box makes a special sound when air passes through.',
        'Cool mist is like opening a window on a cold night - the cool, moist air helps reduce swelling in the airway.',
      ],
      examples: [
        'A 2-year-old wakes up at midnight with a barking cough and noisy breathing.',
        'A child with croup feels better after sitting in the bathroom with steam from the shower.',
        'A child gets a dose of dexamethasone in the emergency room and feels better within hours.',
      ],
      patientCounselingPoints: [
        'Keep your child calm and upright - crying makes croup worse',
        'Cool mist or steam can help reduce swelling',
        'Croup is often worse at night - this is normal',
        'Call the doctor if stridor occurs when the child is resting',
      ],
    },

    2: {
      level: 2,
      summary: 'Croup (laryngotracheobronchitis) is a viral upper respiratory infection causing subglottic airway inflammation in children. Characterized by barking cough, stridor, and hoarseness. Treatment includes oral dexamethasone and nebulized epinephrine for moderate to severe cases.',
      explanation: `## What is Croup?

Croup, or laryngotracheobronchitis, is a viral infection that causes inflammation of the upper airway, specifically the subglottic region (below the vocal cords). This narrowing causes the characteristic symptoms.

**Epidemiology:**
- Age: 6 months to 3 years (peak 24 months)
- Season: Fall and winter
- Incidence: 3-6% of children per year
- Male to female ratio: 1.5:1

**Pathogens:**
- Parainfluenza virus (types 1-3): 75% of cases
- Other: RSV, influenza, adenovirus, rhinovirus, measles

**Why Young Children:**
- Subglottic airway is narrowest in young children
- Small amount of swelling causes significant narrowing
- Airway resistance inversely proportional to radius⁴
- As child grows, airway widens and croup becomes less likely

## Clinical Presentation

**Typical Symptoms:**

| Symptom | Frequency | Description |
|---------|-----------|-------------|
| Barking cough | 100% | Seal-like, often worse at night |
| Stridor | 60-80% | Inspiratory, worse with agitation |
| Hoarseness | 90% | Raspy voice or aphonia |
| Fever | 50-70% | Usually low-grade |
| Rhinorrhea | 75% | Prodromal cold symptoms |

**Natural History:**
- Day 1-2: URI symptoms (runny nose, mild cough)
- Day 2-3: Onset of barking cough and stridor
- Day 3-4: Peak severity (often worse at night)
- Day 5-7: Gradual resolution
- Cough may persist for up to 2 weeks

**Worse at Night:**
- Circadian variation in airway inflammation
- Dry air at night
- Child is recumbent (gravity effect)
- Less distraction from symptoms

## Severity Assessment

**Westley Croup Score:**

| Sign | 0 Points | 1 Point | 2 Points | 3 Points |
|------|----------|----------|----------|----------|
| Stridor | None | With agitation | At rest | None |
| Retractions | None | Mild | Moderate | Severe |
| Air entry | Normal | Decreased | Severely decreased | None |
| Skin color | Normal | Pale | Cyanosis (dusky) | None |

*Interpretation:*
- 0-2: Mild croup
- 3-5: Moderate croup
- 6-11: Severe croup
- >11: Impending respiratory failure

**Clinical Assessment:**

*Mild Croup:*
- Stridor only with agitation
- No retractions
- Normal work of breathing
- Normal color

*Moderate Croup:*
- Stridor at rest (may be intermittent)
- Mild retractions
- Slightly increased work of breathing
- Normal color

*Severe Croup:*
- Stridor at rest (continuous)
- Significant retractions
- Markedly increased work of breathing
- Pale or dusky color
- Lethargy or anxiety

## Differential Diagnosis

**Conditions Mimicking Croup:**

| Condition | Distinguishing Features |
|-----------|-------------------------|
| Bacterial tracheitis | Toxic appearance, high fever, copious secretions |
| Epiglottitis | Drooling, toxic, tripod position, muffled voice |
| Foreign body aspiration | Sudden onset, unilateral findings, no fever |
| Peritonsillar abscess | Trismus, unilateral tonsillar swelling, hot potato voice |
| Angioedema | Lip/tongue swelling, possible allergic cause |
| Retropharyngeal abscess | Neck stiffness, muffled voice, stridor when supine |

## Treatment

**Home Management (Mild Croup):**

*Cool Mist:*
- Humidifier in bedroom
- Sit in bathroom with running hot shower (steam)
- Cool night air (bundle child and go outside)
- Evidence: Limited but generally safe

*Fluids:*
- Small, frequent amounts
- Prevent dehydration
- Soothes throat

*Fever Control:*
- Acetaminophen 15 mg/kg q4-6h
- Ibuprofen 10 mg/kg q6-8h (≥6 months)

**Medical Treatment:**

*Corticosteroids:*
- Dexamethasone: 0.15-0.6 mg/kg orally or IM
- Single dose usually sufficient
- Onset: 1-2 hours, peak at 4-6 hours
- Reduces hospitalization by 50%
- Reduces return to care

*Racemic Epinephrine:*
- Indication: Moderate to severe croup
- Dose: 0.5 mL of 2.25% racemic epinephrine in 3 mL normal saline
- Administration: Nebulization
- Onset: Within minutes
- Duration: 1-2 hours
- Observation: 2-3 hours before discharge

**L-Epinephrine Alternative:**
- L-epinephrine 1:1000: 5 mg (5 mL of 1 mg/mL)
- Similar efficacy to racemic epinephrine
- More widely available
- Lower cost

## Disposition

**Discharge Home:**
- Mild croup (resolved with steroids)
- Moderate croup after epinephrine IF:
  - No stridor at rest for 2-3 hours
  - Normal work of breathing
  - Normal color
  - Reliable caregivers
  - Near medical care

**Admission:**
- Severe croup (Westley score ≥6)
- Recurrent stridor after epinephrine
- Toxic appearance
- Poor social situation
- Distance from medical care

**ICU Considerations:**
- Severe respiratory distress
- Need for multiple epinephrine treatments
- Stridor at rest despite steroids and epinephrine

## Complications

**Respiratory Failure:**
- Rare with modern treatment
- Indications for intubation:
  - Worsening hypoxemia
  - Rising PaCO2
  - Altered mental status
  - Severe retractions with fatigue

**Bacterial Superinfection:**
- Secondary bacterial tracheitis
- Suspect if: High fever, toxic appearance, copious secretions
- Treatment: IV antibiotics, possible intubation

**Dehydration:**
- Due to difficulty swallowing
- Painful swallowing
- Increased insensible losses from tachypnea

## Prognosis

**Short-term:**
- Most recover completely within 1 week
- Cough may persist for 2 weeks
- Hospital stay: Usually 1 day if admitted

**Recurrence:**
- 5-15% have multiple episodes
- Usually with URI
- Becomes less frequent with age
- Rare after age 6

**Long-term:**
- No permanent airway damage
- Normal lung function
- Possible increased risk of reactive airway disease`,
      keyTerms: [
        { term: 'subglottic', definition: 'Located below the vocal cords; the narrowest part of a child\'s airway', pronunciation: 'sub-GLAH-tik' },
        { term: 'stridor', definition: 'High-pitched, inspiratory sound caused by upper airway obstruction' },
        { term: 'retractions', definition: 'Visible sinking in of chest wall between or below ribs during breathing' },
        { term: 'racemic epinephrine', definition: 'Nebulized medication that reduces airway swelling through vasoconstriction' },
      ],
      analogies: [
        'The subglottic airway is like a narrow pipe in young children - a little swelling from inflammation significantly narrows the opening.',
        'Westley croup score is like a checklist for determining how sick a child is - higher score means worse croup.',
      ],
      clinicalNotes: 'Always visualize the airway in croup if you suspect epiglottitis (drooling, toxic appearance). Do NOT agitate these children for examination.',
    },

    3: {
      level: 3,
      summary: 'Croup is a viral laryngotracheobronchitis causing subglottic airway inflammation in children. Parainfluenza virus is the most common cause. Clinical diagnosis based on barking cough and stridor. Treatment with dexamethasone reduces hospitalization; nebulized epinephrine for moderate to severe cases.',
      explanation: `## Pathophysiology

**Anatomic Considerations:**

*Pediatric Airway:*
- Narrowest at subglottic region (cricoid ring)
- Subglottic diameter: ~3-4 mm in infants (vs. ~10 mm in adults)
- Loose submucosal connective tissue: Prone to edema
- Mucosa loosely attached: Allows significant swelling
- Cartilage soft: More collapsible

*Poiseuille's Law Application:*
- Resistance = 8 × length × viscosity / (π × radius⁴)
- 1 mm radius reduction in 4 mm airway = Doubling of resistance
- Explains dramatic symptoms with small degree of swelling

**Inflammatory Process:**

*Viral Pathogenesis:*
- Virus infects respiratory epithelium
- Inflammatory cascade: Histamine, bradykinin, prostaglandins
- Subglottic edema: Loose tissue allows significant swelling
- Mucus production: Adds to obstruction
- Spasm of laryngeal muscles: Can contribute

**Causes of Airway Narrowing:**
1. Edema of subglottic mucosa (primary)
2. Increased secretions
3. Laryngeal muscle spasm
4. Cellular debris

**Differential Airway Dynamics:**
- Inspiration: Negative intrathoracic pressure
- Airway sucked inward, further narrowing
- Creates inspiratory stridor
- Agitation worsens: Increased flow velocity → more turbulence → more obstruction

## Clinical Assessment

**Symptom Progression:**

| Day | Typical Symptoms |
|-----|-----------------|
| 1-2 | URI symptoms (rhinorrhea, low-grade fever, mild cough) |
| 2-3 | Onset of barking cough, hoarseness |
| 3-4 | Peak severity (stridor, worse at night) |
| 4-5 | Gradual improvement during day |
| 5-7 | Resolution of acute symptoms |

**Westley Croup Score (Detailed):**

*Stridor:*
- 0: None
- 1: With agitation or crying
- 2: At rest (occasional)
- 3: At rest (continuous)

*Retractions:*
- 0: None
- 1: Mild (suprasternal or intercostal only)
- 2: Moderate (including subcostal)
- 3: Severe (including supraclavicular and sternal)

*Air Entry:*
- 0: Normal
- 1: Decreased bilaterally
- 2: Severely decreased bilaterally

*Cyanosis:*
- 0: None
- 1: With agitation
- 2: At rest
- 3: Not scored (emergency intervention needed)

*Level of Consciousness:*
- 0: Normal (playing, appropriate)
- 1: Sleepy but arousable
- 2: Lethargic, difficult to arouse

**Diagnostic Approach:**

*Clinical Diagnosis:*
- Based on history and physical
- No imaging required for typical croup
- Neck X-ray may show "steeple sign" (subglottic narrowing)
- "Steeple sign" NOT required for diagnosis

*Indications for Imaging:*
- Atypical presentation
- Suspected foreign body
- Suspected epiglottitis
- Severe disease not responding to treatment

*Laboratory Studies:*
- NOT routinely indicated
- Consider CBC if bacterial superinfection suspected

**Differential Diagnosis - Detailed:**

| Condition | Age | Key Features |
|-----------|-----|-------------|
| Viral croup | 6mo-3y | Barking cough, no fever or low-grade |
| Bacterial tracheitis | 3mo-6y | High fever, toxic, copious secretions |
| Epiglottitis | 2-6y | Drooling, tripod, toxic, muffled voice |
| Foreign body | Any | Sudden onset, asymmetric, no fever |
| Peritonsillar abscess | Older | Trismus, unilateral swelling |
| Retropharyngeal abscess | <5y | Neck stiffness, stridor supine |
| Angioedema | Any | Lip/tongue swelling, urticaria |
| Subglottic stenosis | Infants | Persistent stridor, biphasic |

## Treatment Protocols

**Corticosteroids (First-Line for All):**

*Dexamethasone:*
- Dose: 0.15-0.6 mg/kg (max 10 mg)
- Route: Oral, IM, or IV (oral preferred)
- Onset: 1-2 hours
- Duration: Single dose usually sufficient
- Evidence: Reduces hospitalization by ~50%
- Reduces need for epinephrine by ~30%

*Prednisolone Alternative:*
- Dose: 1-2 mg/kg
- Used if dexamethasone unavailable
- Slightly slower onset

**Nebulized Epinephrine:**

*Indications:*
- Westley score ≥3 (moderate to severe)
- Stridor at rest
- Significant retractions
- Hypoxemia

*Preparations:*

| Agent | Dose | Notes |
|-------|------|-------|
| Racemic epinephrine 2.25% | 0.5 mL in 3 mL NS | Gold standard |
| L-epinephrine 1:1000 | 5 mg (5 mL) | Similar efficacy, more available |

*Administration:*
- Nebulization with oxygen (6-8 L/min)
- Monitor continuous pulse ox
- Observe for 2-3 hours post-treatment
- "Rebound" possible if effect wears off

*Contraindications:*
- None for acute respiratory distress
- Use caution in cardiac disease

**Oxygen:**
- Indicated for SpO2 <92%
- Maintain SpO2 ≥92%
- Humidified oxygen preferred
- Blow-by oxygen for upset child

**Cool Mist/Humidification:**
- Traditional therapy
- Limited evidence of benefit
- Safe if used correctly
- Avoid hot steam (burn risk)

## Disposition Decisions

**Discharge Criteria:**
- No stridor at rest for 2-3 hours
- Normal work of breathing
- SpO2 ≥92% on room air
- Reliable caregivers
- Able to tolerate oral fluids
- Close access to medical care

**Discharge Instructions:**
- Use cool mist humidifier at night
- Offer fluids frequently
- Acetaminophen/ibuprofen for fever/discomfort
- Return precautions: worsening breathing, stridor at rest, dusky color

**Admission Indications:**
- Westley score ≥6
- Recurrent stridor after epinephrine
- Hypoxemia on room air
- Toxic appearance (suspect bacterial tracheitis)
- Inability to maintain oral intake
- Poor home situation
- Distance from medical care

## Complications

**Respiratory Failure:**
- Rare with modern treatment
- More common with bacterial superinfection
- Indications for intubation:
  - Severe hypoxemia (SpO2 <90% on maximal oxygen)
  - Rising PaCO2 >50 mm Hg
  - Altered mental status
  - Respiratory fatigue

**Intubation Considerations:**
- Use smaller ETT than usual for age
- Usually 0.5-1 size smaller
- High cuff pressures: Risk of mucosal injury
- Extubation when: Stridor resolved, air leak around tube

**Bacterial Tracheitis:**
- Superinfection of croup
- Suspect if: High fever (>39°C), toxic appearance
- Copious thick secretions
- Requires admission, IV antibiotics
- Possible intubation for airway control

**Pneumonia:**
- Rare complication
- Consider if: High fever, focal crackles, prolonged symptoms
- Chest X-ray if suspected

**Dehydration:**
- Due to painful swallowing
- Increased insensible losses
- May require IV fluids

## Special Situations

**Recurrent Croup:**
- Defined: ≥3 episodes
- Consider: Subglottic stenosis, airway anomaly, gastroesophageal reflux
- Workup: Direct laryngoscopy/bronchoscopy
- Treat underlying cause

**Croup in Older Children:**
- Consider other diagnoses (epiglottitis, foreign body)
- May have underlying airway abnormality
- More aggressive evaluation

**Immunocompromised Child:**
- May have atypical presentation
- Higher risk of severe disease
- Consider broader differential`,
      keyTerms: [
        { term: 'steeple sign', definition: 'Radiographic sign of subglottic narrowing seen in croup on AP neck X-ray' },
        { term: 'Poiseuille\'s law', definition: 'Physical law describing relationship between airway resistance and radius' },
        { term: 'subglottic stenosis', definition: 'Narrowing of the airway below the vocal cords; may cause recurrent croup' },
      ],
      clinicalNotes: 'Children with croup should not have their throats examined with a tongue depressor if epiglottitis is possible. This can precipitate airway obstruction.',
    },

    4: {
      level: 4,
      summary: 'Advanced croup management integrates understanding of pediatric airway anatomy, precise clinical scoring, evidence-based use of steroids and epinephrine, recognition of complications and mimics, and appropriate disposition decisions based on response to therapy.',
      explanation: `## Advanced Pathophysiology

**Molecular Mechanisms of Airway Edema:**

*Inflammatory Mediators:*

| Mediator | Source | Effect |
|----------|--------|--------|
| Histamine | Mast cells | Vasodilation, increased permeability |
| Bradykinin | Plasma | Vasodilation, pain, edema |
| Prostaglandins | Mast cells, macrophages | Vasodilation, pain |
| Leukotrienes | Mast cells, eosinophils | Bronchospasm, edema |
| Cytokines (IL-1, IL-6, TNF) | Various cells | Inflammation cascade |

*Viral Pathogenesis:*
- Parainfluenza virus: Hemagglutinin-neuraminidase (HN) protein binds sialic acid
- Fusion (F) protein mediates cell fusion
- Direct epithelial injury
- Recruitment of inflammatory cells

**Airflow Dynamics:**

*Laminar vs. Turbulent Flow:*
- Laminar flow: Smooth, parallel streamlines
- Turbulent flow: Chaotic mixing
- Critical velocity where laminar → turbulent: Lower in narrowed airways

*Reynolds Number:*
- Determines laminar vs. turbulent flow
- Lower in narrowed airways
- Explains stridor (turbulent flow creates sound)

*Bernoulli Principle:*
- Increased velocity → Decreased pressure
- Inspiratory: Airway sucked inward
- Further narrowing in already narrow area
- Creates vicious cycle

## Diagnostic Refinement

**Croup Score Limitations:**

*Westley Score:*
- Interobserver variability: Moderate
- Does not predict outcome perfectly
- Serial measurements more useful than single
- Clinical judgment essential

*Alternative Scoring Systems:*
- Edmonton croup score: Similar to Westley
- Children's Hospital of Eastern Ontario (CHEO) score
- No clear superiority of one system

**Imaging Considerations:**

*Chest/Neck X-ray:*
- "Steeple sign": Subglottic narrowing (loss of normal shoulders)
- Sensitivity: ~50%
- Specificity: High
- NOT required for diagnosis
- Consider if atypical presentation

*CT Scan:*
- Rarely indicated
- Consider for: Suspected foreign body, abscess
- Radiation exposure concern

*Ultrasound:*
- Emerging for airway assessment
- Can measure subglottic diameter
- Research stage currently

**Laboratory Testing:**

*When to Consider:*
- Fever >39°C: Consider CBC, blood culture
- Toxic appearance: Consider septic workup
- Prolonged symptoms: Consider viral panel

*Bacterial Tracheitis Labs:*
- Leukocytosis: WBC >15,000
- Left shift
- Positive blood culture (30-50%)
- Tracheal aspirate culture

## Treatment Optimization

**Corticosteroid Dosing Strategies:**

*Dexamethasone Dosing:*
- Traditional: 0.6 mg/kg
- Lower dose (0.15 mg/kg): Equally effective
- Max dose: 10 mg (some use 16 mg for adolescents)
- Single dose: Usually sufficient

*Repeat Dosing:*
- Consider if symptoms recur after 24-48 hours
- Discharge dose may be given for home use in some protocols
- Evidence limited

*Prednisolone vs. Dexamethasone:*
- Dexamethasone: Preferred (longer duration, better bioavailability)
- Prednisolone: Acceptable alternative
- Taste issues with prednisolone (affects adherence)

**Nebulized Epinephrine Protocols:**

*Racemic vs. L-Epinephrine:*
- Equal efficacy in studies
- L-epinephrine: More available, lower cost
- Racemic: Traditional choice
- Choice based on availability

*Dosing:*
- Racemic 2.25%: 0.5 mL in 3 mL NS
- L-epinephrine 1:1000: 5 mg (5 mL) in 3 mL NS
- Repeat every 20-30 minutes if needed

*Duration of Observation:*
- Traditional: 3-4 hours
- Evidence: 2 hours often sufficient for mild-moderate cases
- Longer observation for severe cases

**Oxygen Therapy:**

*Indications:*
- SpO2 <92% on room air
- Stridor at rest with distress
- Working hard to breathe

*Delivery Methods:*
- Nasal cannula: Preferred if tolerated
- Blow-by: For upset child
- Humidified: Prevents drying of secretions
- Avoid high flow: Turbulent flow worsens stridor

## Airway Management

**Indications for Intubation:**

*Absolute Indications:*
- Respiratory arrest
- Severe hypoxemia unresponsive to oxygen
- Altered mental status from hypercarbia
- Inability to protect airway

*Relative Indications:*
- Rising PaCO2 >50 mm Hg
- Severe retractions with fatigue
- Repeated doses of epinephrine without improvement

**Intubation Technique:**

*Tube Selection:*
- 0.5-1 size smaller than usual for age
- Uncuffed: Traditional choice
- Microcuff: Increasingly used
- Goal: Adequate air leak at low pressure

*Procedure:*
- Difficult airway preparation
- Smaller than usual blade
- Have various tube sizes available
- Sedation: Use caution (may worsen obstruction)

*Post-Intubation:*
- Low ventilator pressures
- PEEP: 3-5 cm H2O
- Sedation: Minimize (allow spontaneous breathing)
- Extubation: When air leak returns, stridor resolves

## Complications Management

**Bacterial Tracheitis:**

*Diagnosis:*
- Suspect in croup that worsens or recurs
- High fever
- Toxic appearance
- Copious thick secretions
- May need bronchoscopy for diagnosis

*Treatment:*
- Hospitalization required
- IV antibiotics: Cefuroxime or ceftriaxone +/- vancomycin
- Airway management: May need intubation
- Secretions: Frequent suctioning

**Epiglottitis (Differential):**

*Key Differentiators:*
- Toxic appearance
- Drooling
- Tripod position (sitting forward)
- Muffled voice ("hot potato voice")
- Prefers sitting, lying flat makes it worse
- Vaccine (Hib) has reduced incidence

*Management:*
- AIRWAY COMES FIRST
- Do NOT examine throat in unstable child
- Intubation in OR setting
- IV antibiotics (ceftriaxone)

**Pneumonia:**

*Consider if:*
- High fever (>39°C) persisting
- Focal crackles
- Decreased breath sounds in one area
- Prolonged symptoms

*Workup:*
- Chest X-ray
- Consider CBC, blood culture
- Treat based on likely pathogen

## Special Populations

**Children with Previous Croup/Intubation:**

*Subglottic Stenosis:*
- Consider if recurrent croup
- Diagnosis: Direct laryngoscopy
- Treatment: Surgical correction if severe

*Airway Anomalies:*
- Laryngomalacia (improves with position)
- Tracheomalacia (worsens with crying)
- Vascular rings (compliance)

**Children with Asthma:**
- May have recurrent croup-like symptoms
- Consider asthma if:
  - Recurrent wheezing
  - Atopic history
  - Response to bronchodilators
- Overlap: "croup variant asthma"

**Special Needs Children:**
- Higher risk of severe disease
- May have baseline airway abnormalities
- Lower threshold for admission

## Quality Improvement

**Clinical Pathways:**
- Standardized assessment (Westley score)
- Standing orders for dexamethasone
- Protocol for epinephrine administration
- Discharge criteria
- Parent education materials

**Outcomes to Track:**
- Return visits
- Admission rate
- ICU transfer rate
- Intubation rate
- Length of stay
- Parent satisfaction

**Cost Considerations:**
- Observation period vs. discharge
- Single dose vs. multiple doses of steroids
- Racemic vs. L-epinephrine cost`,
      keyTerms: [
        { term: 'reynolds number', definition: 'Dimensionless quantity predicting laminar vs. turbulent flow based on fluid properties and flow characteristics' },
        { term: 'microcuff ETT', definition: 'Endotracheal tube with high-volume, low-pressure cuff designed for pediatric use' },
      ],
      clinicalNotes: 'L-epinephrine is equally effective to racemic epinephrine and much less expensive. Use 5 mg (5 mL of 1:1000) via nebulization. Observe for 2-3 hours before discharge.',
    },

    5: {
      level: 5,
      summary: 'Expert-level croup management integrates detailed airway pathophysiology, validated scoring systems, evidence-based therapeutic protocols, airway management skills, recognition of complications and mimics, and individualized care for special populations.',
      explanation: `## Advanced Pathophysiology

**Subglottic Airway Dynamics:**

*Pressure-Flow Relationships:*
- Poiseuille flow: Q = πΔPr⁴ / 8ηL
- 50% radius reduction = 16× resistance increase
- Explains dramatic symptom change with small swelling changes

*Flow Regimes:*
- Laminar: Low velocity, straight streamlines
- Transitional: Mixed laminar/turbulent
- Turbulent: High velocity, chaotic (produces sound)
- Stridor: Turbulent flow creating audible vibrations

*Critical Flow Velocity:*
- Lower in narrowed airways
- Explains stridor onset at specific level of obstruction
- Agitation increases flow velocity → more stridor

**Viral-Host Interactions:**

*Parainfluenza Virus:*
- HN (hemagglutinin-neuraminidase) binds sialic acid receptors
- F (fusion) protein mediates cell-cell fusion
- Syncytium formation damages epithelium
- Type 1: Most virulent, most common croup cause

*Immune Response:*
- Th2-predominant response in some children
- IgE production possible (explains atopic connection)
- Eosinophil degranulation products in airway
- Histamine, leukotrienes contribute to edema

## Clinical Decision-Making

**Scoring System Validation:**

*Westley Score:*
- Developed 1978
- Validated in multiple studies
- Sensitivity: 72-86%
- Specificity: 65-75% for admission
- Inter-rater reliability: κ = 0.64-0.78

*Score Limitations:*
- Does not predict all admissions
- Clinical judgment still essential
- Serial scores more useful than single
- Underestimates severity in some children

**Risk Stratification:**

| Risk Factor | Relative Risk of Admission |
|-------------|----------------------------|
| Age <1 year | 2-3x |
| History of croup | 1.5x |
| Prematurity | 2x |
- Westley score: Best single predictor
- Time of presentation: Night presentations get admitted more
- Social factors: Distance from care, caregiver reliability

## Therapeutic Optimization

**Corticosteroid Pharmacology:**

*Dexamethasone:*
- Potent glucocorticoid
- Minimal mineralocorticoid effect
- Duration: 36-72 hours
- Onset: 1-2 hours
- Bioavailability: Oral nearly 100%
- Distribution: Wide, crosses blood-brain barrier

*Dosing Studies:*
- 0.15 mg/kg vs. 0.6 mg/kg: Equally effective
- No dose-response relationship above 0.15 mg/kg
- Max dose: 10 mg (some protocols use higher)

*Alternatives:*
- Budesonide nebulized: More rapid onset (30 min)
- Fluticasone: Not superior to dexamethasone
- Prednisolone: Acceptable, taste issues

**Epinephrine Mechanism:**

*Alpha-1 Effect:*
- Vasoconstriction of submucosal vessels
- Reduces edema within minutes
- Duration: 1-2 hours
- Primary mechanism for symptom relief

*Beta-2 Effect:*
- Bronchodilation (minor contribution)
- May reduce bronchospasm component

*Racemic vs. L-epinephrine:*
- Racemic: Contains both isomers
- L-epinephrine: Active isomer only
- Equal efficacy: Multiple RCTs
- Cost: L-epinephrine much less expensive

**Combination Therapy:**

*Dexamethasone + Epinephrine:*
- Synergistic effect
- Steroids: Prevent recurrence
- Epinephrine: Immediate relief
- Standard of care for moderate-severe croup

## Advanced Airway Management

**Difficult Airway Prediction:**

*Risk Factors:*
- Age <1 year
- Previous croup requiring intubation
- Known airway anomaly
- Severe present illness

*Preparation:*
- Have multiple ETT sizes available
- Smaller than usual blade (Miller 0 or 1)
- Have rigid bronchoscope available
- ENT consultation for severe cases

**Intubation Technique:**

*Tube Size Selection:*
- Formula: (Age/4) + 3.5 → Then subtract 0.5-1
- Uncuffed traditional: 3.0 ID for <1 year
- Microcuff option: 3.0 cuffed for infants
- Goal: Air leak at <20 cm H2O pressure

*Technique Pearls:*
- Awake intubation considered for severe obstruction
- Prepare for difficult laryngoscopy
- Have backup equipment ready
- Surgical airway kit available

*Post-Intubation Management:*
- Vent settings: Low pressure, adequate rate
- PEEP: 3-5 cm H2O (use cautiously)
- Sedation: Minimize (preserve respiratory drive)
- Extubate when: Air leak returns, minimal edema

## Special Populations

**Recurrent Croup:**

*Evaluation:*
- History: Number of episodes, age pattern
- Physical exam: Growth, dysmorphisms
- Direct laryngoscopy/bronchoscopy: Gold standard
- CT scan: For vascular anomalies

*Etiologies:*
- Subglottic stenosis (most common)
- Laryngomalacia/tracheomalacia
- Vascular rings/slings
- Cysts/hamartomas
- Gastroesophageal reflux
- Atopy/asthma

**Croup Variant Asthma:**
- Atopic history
- Recurrent "croup" episodes
- Response to bronchodilators
- Consider asthma evaluation
- May need inhaled corticosteroids

**Special Needs Children:**
- Hypotonia: Worse airway collapse
- Previous airway surgery: Higher risk
- Seizure disorder: May have croup-like sounds
- Lower threshold for intervention

## Controversies and Evolving Practice

**Observation Duration:**

*Traditional:*
- 3-4 hours after epinephrine
- Concern for "rebound"

*Evidence-Based:*
- 2 hours sufficient for most
- Identify children at risk for rebound:
  - Age <1 year
  - More severe initial presentation
  - Longer duration of symptoms

**Steroid Dosing:**

*Low Dose (0.15 mg/kg) vs. High Dose (0.6 mg/kg):*
- Equal efficacy in multiple studies
- High dose no additional benefit
- Low dose now recommended

**Heliox Therapy:**

*Mechanism:*
- Helium: Lower density than air
- Reduces turbulent flow
- Decreases work of breathing

*Evidence:*
- Small studies: Benefit in severe croup
- Not widely available
- Not standard of care

**Humidification:**

*Cool Mist:*
- Traditional therapy
- Limited evidence
- Safe if used correctly

*Steam:*
- Potential for burns
- Not recommended
- Avoid hot steam

## Systems-Based Care

**Clinical Pathways:**

*Components:*
- Standardized order set
- Nursing protocols for assessment
- Westley score documentation
- Discharge criteria
- Parent education materials

*Benefits:*
- Reduced length of stay
- Reduced admissions
- Improved consistency
- Cost reduction

**Quality Metrics:**

| Metric | Benchmark |
|--------|-----------|
| Steroid administration rate | >95% |
| Return visit rate | <5% |
| Admission rate | 5-10% |
| ICU transfer rate | <1% |
| Intubation rate | <0.5% |

**Cost Considerations:**
- Observation period cost: ~$500-1000
- Admission cost: ~$2000-4000
- Cost-effective to observe longer vs. admit
- Home disposition safe for most with appropriate observation

## Long-term Outcomes

**Recurrent Croup:**
- 5-15% have multiple episodes
- Most outgrow by age 6
- Some develop asthma
- Consider workup for >3 episodes

**Airway Sequelae:**
- Subglottic stenosis: Rare after uncomplicated croup
- More common after intubation
- May present as recurrent croup

**Asthma Risk:**
- Croup associated with increased asthma risk
- RR 1.5-2.0
- May represent shared susceptibility (atopy)
- Not caused by croup per se

**Parental Anxiety:**
- Significant stress for parents
- Noisy breathing is frightening
- Education reduces anxiety
- Clear return precautions essential`,
      keyTerms: [
        { term: 'synthetic lung compliance', definition: 'Changes in lung compliance due to airway obstruction affecting work of breathing' },
      ],
      clinicalNotes: `Expert Practice Pearls:

1. **Dexamethasone:** Give 0.15-0.6 mg/kg (max 10 mg) orally. Single dose sufficient. Lower dose (0.15 mg/kg) equally effective to higher doses.

2. **Epinephrine:** Use L-epinephrine 5 mg (5 mL of 1:1000) in 3 mL NS. Equally effective to racemic epinephrine, much less expensive.

3. **Observation:** Observe for 2 hours after epinephrine. Longer observation (3-4 hours) for age <1 year, severe presentation, or social concerns.

4. **Discharge:** Safe if no stridor at rest, normal work of breathing, SpO2 ≥92% on room air, and reliable caregivers.

5. **Intubation:** Use ETT 0.5-1 size smaller than usual. Goal is air leak at <20 cm H2O. Extubate when air leak returns.

6. **Recurrent Croup:** Evaluate for subglottic stenosis, airway anomalies, or asthma if ≥3 episodes. Direct laryngoscopy is gold standard.`,
    },
  },

  media: [
    {
      id: 'croup-pathophysiology',
      type: 'diagram',
      filename: 'croup-pathophysiology.svg',
      title: 'Croup Pathophysiology',
      description: 'Diagram showing subglottic airway narrowing in croup',
    },
    {
      id: 'westley-croup-score',
      type: 'diagram',
      filename: 'westley-croup-score.svg',
      title: 'Westley Croup Score',
      description: 'Visual guide to Westley croup scoring system',
    },
  ],

  citations: [
    {
      id: 'aap-croup-guidelines',
      type: 'article',
      title: 'Diagnosis and Management of Croup: Clinical Practice Guideline',
      authors: ['American Academy of Pediatrics'],
      source: 'Pediatrics',
      url: 'https://doi.org/10.1542/peds.2020-088890',
      accessedDate: '2026-01-26',
    },
    {
      id: 'croup-meta-analysis-2019',
      type: 'article',
      title: 'Glucocorticoids for Croup: Systematic Review and Meta-analysis',
      authors: ['Fox, B.', 'et al.'],
      source: 'Pediatrics',
      url: 'https://doi.org/10.1542/peds.2019-1265',
      accessedDate: '2026-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'system-respiratory', targetType: 'system', relationship: 'related', label: 'Respiratory System' },
    { targetId: 'condition-epiglottitis', targetType: 'condition', relationship: 'see-also', label: 'Epiglottitis (Differential)' },
    { targetId: 'condition-foreign-body', targetType: 'condition', relationship: 'see-also', label: 'Foreign Body Aspiration' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['pediatrics', 'viral infection', 'upper airway obstruction', 'stridor'],
    keywords: ['croup', 'laryngotracheobronchitis', 'stridor', 'barking cough', 'dexamethasone', 'racemic epinephrine', 'Westley score'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'emergency-medicine'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default croup;
