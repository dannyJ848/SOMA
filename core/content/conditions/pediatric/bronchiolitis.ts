/**
 * Bronchiolitis - Pediatric Condition
 *
 * Comprehensive content on bronchiolitis including RSV diagnosis,
* supportive care, and management guidelines.
 */

import { EducationalContent } from '../../types';

export const bronchiolitis: EducationalContent = {
  id: 'condition-bronchiolitis',
  type: 'condition',
  name: 'Bronchiolitis',
  nameEs: 'Bronquiolitis',
  alternateNames: ['RSV Bronchiolitis', 'Viral Bronchiolitis', 'Infant Bronchiolitis'],

  levels: {
    1: {
      level: 1,
      summary: 'Bronchiolitis is a common lung infection in babies caused by a virus, usually RSV. It causes coughing, wheezing, and trouble breathing. Most babies get better at home with care, but some need hospital care.',
      explanation: `## What is Bronchiolitis?

Bronchiolitis is an infection that affects the small breathing tubes (bronchioles) in the lungs. It's most common in babies under 2 years old and is usually caused by a virus called RSV (respiratory syncytial virus).

**Who Gets It:**
- Most common in babies under 1 year old
- Peak age: 2-6 months
- Most common in winter months (November to March)
- Almost all children get it by age 2

**The Good News:**
- Most babies recover at home
- It usually goes away in 1-2 weeks
- Serious problems are rare

## Warning Signs and Symptoms

**Common Symptoms:**

1. **Runny Nose and Cough**
   - Starts like a cold
   - Cough gets worse over several days

2. **Wheezing**
   - Whistling sound when breathing
   - Can hear it when baby breathes out

3. **Trouble Breathing**
   - Breathing faster than normal
   - Chest sucks in between ribs or at neck
   - Nostrils flare open when breathing
   - Grunting sounds

4. **Poor Feeding**
   - Baby eats less than usual
   - May have trouble sucking and breathing at same time

5. **Fever**
   - Usually low-grade (around 100-101°F)
   - Not always present

## How to Help Your Baby at Home

**Things That Help:**
- Keep baby upright when feeding
- Smaller, more frequent feedings
- Use a cool-mist humidifier
- Keep baby's nose clear with saline drops
- Fever medicine if needed (acetaminophen for babies >3 months, ibuprofen >6 months)

**Things That DON'T Help:**
- Antibiotics (viruses don't respond to antibiotics)
- Cough medicines (not safe for babies)
- Over-the-counter cold medicines (not safe for babies)

## When to Call the Doctor

Call the doctor if your baby:
- Is breathing faster than 60 breaths per minute
- Has trouble eating (less than half of normal)
- You see chest sucking in between ribs
- Makes grunting sounds when breathing
- Lips or nails look blue
- Has a fever over 100.4°F (if under 3 months)
- Seems very tired or hard to wake up

**Call 911 if:**
- Baby stops breathing for more than 20 seconds
- Lips or face turn blue
- Baby seems to be struggling to breathe

## Medical Treatment

**For Most Babies:**
- Supportive care at home
- Time to get better
- Plenty of fluids

**For Babies Who Need Hospital Care:**
- Oxygen if blood oxygen is low
- IV fluids if not eating well
- Monitoring of breathing and oxygen
- Suctioning of mucus
- Usually in the hospital for 2-4 days

## Prevention

**Ways to Help Prevent Bronchiolitis:**

1. **Wash Hands Often**
   - Before touching baby
   - After being in public places

2. **Keep Baby Away from Sick People**
   - Especially people with cold symptoms
   - Avoid crowds during RSV season

3. **Don't Smoke Around Baby**
   - Secondhand smoke increases risk
   - Quit smoking if possible

4. **Breastfeed if Possible**
   - Breast milk helps fight infections

**High-Risk Babies May Need Special Medicine:**
- Premature babies
- Babies with heart or lung problems
- Medicine called palivizumab (Synagis) given monthly during RSV season

## Recovery

- Most babies feel better in 7-14 days
- Cough may last for 3-4 weeks
- Wheezing may come back with future colds
- No permanent lung damage
- Most babies grow up with healthy lungs`,
      keyTerms: [
        { term: 'bronchiolitis', definition: 'An infection of the small breathing tubes in the lungs', pronunciation: 'brong-kee-oh-LYE-tis' },
        { term: 'RSV', definition: 'Respiratory syncytial virus; the most common cause of bronchiolitis', pronunciation: 'RES-pee-ruh-tor-ee sin-SISH-ul VYE-rus' },
        { term: 'wheezing', definition: 'A whistling sound when breathing, usually when breathing out' },
        { term: 'bronchioles', definition: 'The smallest tubes in the lungs that carry air to the air sacs', pronunciation: 'BRONG-kee-oles' },
        { term: 'palivizumab', definition: 'A medicine given monthly to prevent severe RSV in high-risk babies', pronunciation: 'pal-ih-VIZ-yoo-mab' },
      ],
      analogies: [
        'The bronchioles are like tiny straws in the lungs - when swollen and filled with mucus, it\'s hard for air to get through.',
        'Bronchiolitis is like a cold that moves down to the lungs and causes the tiny breathing tubes to swell.',
      ],
      examples: [
        'A 4-month-old baby has a cold that got worse, with wheezing and fast breathing.',
        'Parents use saline drops and a bulb suction to clear their baby\'s stuffy nose.',
        'A premature baby gets monthly Synagis shots during RSV season to prevent severe illness.',
      ],
      patientCounselingPoints: [
        'Antibiotics don\'t help bronchiolitis - it\'s caused by a virus',
        'Never give cough or cold medicines to babies under 2',
        'Keep baby\'s nose clear to help with feeding and breathing',
        'Watch for signs of trouble breathing and seek care if needed',
      ],
    },

    2: {
      level: 2,
      summary: 'Bronchiolitis is a viral lower respiratory tract infection primarily affecting infants under 2 years. RSV is the most common cause. Clinical presentation includes rhinorrhea, cough, wheezing, and increased work of breathing. Treatment is supportive; hospitalization reserved for respiratory distress or hypoxemia.',
      explanation: `## What is Bronchiolitis?

Bronchiolitis is an acute viral infection of the lower respiratory tract that primarily affects the bronchioles (small airways). It is the most common cause of hospitalization in infants under 1 year of age.

**Epidemiology:**
- Age: <2 years, peak 2-6 months
- Season: Winter months (November-March in Northern Hemisphere)
- Incidence: 10-30% of infants in first year
- Hospitalization rate: 2-3% of infected infants

**Pathogens:**
- RSV (Respiratory Syncytial Virus): 70-80%
- Rhinovirus: 10-20%
- Human metapneumovirus: 5-10%
- Others: Parainfluenza, adenovirus, influenza

## Clinical Presentation

**Typical Course:**
1. **Prodrome (2-3 days):** Rhinorrhea, cough, low-grade fever
2. **Progression (3-5 days):** Increasing respiratory distress, wheezing
3. **Peak (days 4-6):** Worst symptoms, hospitalization if needed
4. **Recovery (7-14 days):** Gradual improvement, cough may persist

**Symptoms:**

| Symptom | Frequency | Characteristics |
|---------|-----------|-----------------|
| Rhinorrhea | 95% | Clear or white, profuse |
| Cough | 90% | Often worsens at night |
| Wheezing | 60% | Expiratory, sometimes inspiratory |
| Fever | 50-70% | Usually low-grade, may be absent |
| Poor feeding | 50% | Due to respiratory distress |

**Physical Examination:**

*Respiratory Signs:*
- Tachypnea (age-based norms)
- Nasal flaring
- Retractions (suprasternal, intercostal, subcostal)
- Grunting
- Wheezing or crackles
- Decreased breath sounds if severe

*General Appearance:*
- May appear ill but alert
- Dehydration signs if feeding poorly
- Cyanosis with severe hypoxemia

## Risk Factors for Severe Disease

**Patient Risk Factors:**

| Risk Factor | Relative Risk |
|-------------|---------------|
| Age <3 months | 2-3x |
| Prematurity (<37 weeks) | 3-5x |
| Chronic lung disease | 4-10x |
| Congenital heart disease | 2-4x |
| Immunocompromised | 5-10x |
| Neuromuscular disease | 3-5x |

**Environmental Factors:**
- Exposure to tobacco smoke
- Lack of breastfeeding
- Daycare attendance
- Crowded living conditions
- Younger siblings in school

## Diagnosis

**Clinical Diagnosis:**
- Based on history and physical examination
- No diagnostic testing required for typical cases
- Routine chest X-ray NOT recommended

**When to Consider Testing:**

*RSV Testing:*
- Nasal swab or wash
- Rapid antigen test or PCR
- Results in 15-60 minutes
- Consider for: Hospitalized patients, distinguishing from other diagnoses

*Chest X-ray Indications:*
- Suspicion of pneumonia
- Pneumothorax or pneumomediastinum concern
- Congenital heart disease consideration
- Atypical presentation

**Laboratory Studies:**
- NOT routinely recommended
- Consider: CBC, blood culture if fever >39°C (≥3 months) or looks ill
- Consider: Blood gas if severe respiratory distress

## Assessment Severity

**Respiratory Rate by Age:**

| Age | Normal | Tachypnea |
|-----|--------|-----------|
| <2 months | <60 bpm | >60 bpm |
| 2-12 months | <50 bpm | >50 bpm |
| 1-2 years | <40 bpm | >40 bpm |

**Severity Classification:**

| Classification | Findings |
|----------------|----------|
| Mild | Normal SpO2, RR <50, minimal retractions |
| Moderate | SpO2 90-94%, RR 50-60, visible retractions |
| Severe | SpO2 <90%, RR >60, significant retractions, lethargy |

**Indications for Hospitalization:**
- Oxygen saturation <90%
- Inability to maintain hydration
- Respiratory distress/fatigue
- Apnea (especially <6 months)
- Underlying risk factors
- Social concerns (ability to monitor at home)

## Treatment

**Supportive Care (Mainstay):**

*Nasal Suctioning:*
- Saline drops followed by bulb suction
- Before feeding and before sleep
- Limit suctioning to avoid trauma

*Hydration:*
- Small, frequent feeds
- Nasogastric or IV fluids if unable to maintain oral intake
- Goal: Normal hydration status

*Oxygen:*
- Indicated for SpO2 <90%
- Target SpO2: ≥90% (some use 92%)
- Humidified oxygen preferred
- Nasal cannula usually adequate

**Medications NOT Recommended:**

| Medication | Recommendation | Reason |
|------------|----------------|--------|
| Bronchodilators (albuterol) | NOT routine | No proven benefit, may cause adverse effects |
| Corticosteroids | NOT routine | No proven benefit for typical bronchiolitis |
| Antibiotics | NOT routine | Viral etiology; use only if bacterial co-infection |
| Chest physiotherapy | NOT routine | No proven benefit |

**Exceptions (Trial Considered):**
- Bronchodilator trial may be considered for atypical history (recurrent wheezing)
- Corticosteroids may be considered for severe disease with history of atopy

**High-Flow Nasal Cannula:**
- Provides humidified, warmed oxygen at high flow
- Reduces need for intubation in some cases
- May be used for moderate-severe disease

**Mechanical Ventilation:**
- Indicated for respiratory failure
- Hypoxemia despite oxygen
- Hypercapnia with respiratory acidosis
- Apnea requiring intervention

## Complications

**Respiratory:**
- Apnea (especially <6 months)
- Respiratory failure
- Pneumothorax (rare)
- Bacterial superinfection (pneumonia, otitis media)

**Other:**
- Dehydration
- Hospital-acquired infections
- Fatigue and respiratory muscle exhaustion

## Prognosis

**Short-term:**
- Most recover completely within 2 weeks
- Cough may persist for 3-4 weeks
- Hospital stay typically 2-4 days

**Long-term:**
- Increased risk of recurrent wheezing/asthma
- Most children outgrow wheezing by school age
- No evidence of permanent lung damage
- Possible reduced lung function in those with severe disease

## Prevention

**RSV Prophylaxis (Palivizumab):**

*Indications (AAP Guidelines):*
- Prematurity <29 weeks, <12 months old at RSV season start
- Prematurity 29-32 weeks with chronic lung disease, <12 months
- Severe immunocompromise, <24 months
- Congenital heart disease with cyanosis or on medications, <12 months

*Dosing:*
- 15 mg/kg IM monthly
- Maximum 5 doses per RSV season
- Given in fall/winter months

**General Prevention:**
- Hand hygiene
- Avoid exposure to ill individuals
- No smoking around child
- Breastfeeding encouragement
- Limit daycare attendance in high-risk infants if possible`,
      keyTerms: [
        { term: 'bronchioles', definition: 'The smallest airways in the lungs, branching off the bronchi', pronunciation: 'BRONG-kee-oles' },
        { term: 'RSV', definition: 'Respiratory syncytial virus; the most common cause of bronchiolitis in infants' },
        { term: 'retractions', definition: 'Visible sinking in of the chest wall between ribs or at neck during breathing' },
        { term: 'tachypnea', definition: 'Abnormally fast breathing rate for age', pronunciation: 'tak-ip-NEE-ah' },
        { term: 'hypoxemia', definition: 'Low oxygen levels in the blood', pronunciation: 'hi-pok-SEE-mee-ah' },
      ],
      analogies: [
        'Bronchiolitis narrows the tiny breathing tubes like a kinked straw - air has trouble getting through.',
        'The progression of bronchiolitis is like a cold that slowly moves deeper into the lungs over several days.',
      ],
      clinicalNotes: 'Respiratory rate is the most reliable predictor of disease severity. Count for a full minute when the infant is calm. Apnea may be the only sign in young infants with RSV infection.',
    },

    3: {
      level: 3,
      summary: 'Bronchiolitis is a viral lower respiratory tract infection affecting infants, primarily caused by RSV. It is characterized by bronchiolar inflammation, mucus production, and airway obstruction. Diagnosis is clinical; treatment is supportive. Hospitalization is based on respiratory distress and hypoxemia.',
      explanation: `## Pathophysiology

**Viral Pathogenesis:**

1. **Inoculation:** Virus enters via respiratory droplets or direct contact
2. **Epithelial Infection:** Virus infects bronchiolar epithelial cells
3. **Inflammatory Response:**
   - Necrosis of epithelial cells
   - Peribronchial inflammation and edema
   - Mucus hypersecretion
   - Sloughed epithelial cells and mucus form plugs
4. **Airway Obstruction:**
   - Small airways already narrowed in infants
   - Inflammation and edema further narrow lumen
   - Mucus plugs cause complete obstruction
   - Air trapping and hyperinflation result
5. **Ventilation-Perfusion Mismatch:**
   - Obstructed areas receive air but no perfusion
   - Atelectasis in some areas, hyperinflation in others
   - Hypoxemia results

**Anatomic Considerations:**
- Infant airways are smaller
- Less cartilage support
- More prone to collapse
- Higher airway resistance
- Less collateral ventilation

**Host Immune Response:**
- Th2-skewed response in some infants
- IgE production may contribute to wheezing
- Cytokine storm in severe disease
- Epithelial sloughing may contain viral antigens

## Clinical Assessment

**Severity Scoring Systems:**

*Respiratory Distress Assessment Instrument (RDAI):*
- Retractions (0-3)
- Wheezing (0-3)
- Respiratory rate (0-3)
- Total: 0-9, higher = worse

*Clinical Asthma Score (modified):*
- Respiratory rate
- Wheezing
- Retractions
- Accessory muscle use
- Oxygen saturation

**Risk Stratification:**

| Low Risk | Moderate Risk | High Risk |
|----------|---------------|-----------|
| Term infant | Age 1-3 months | Age <1 month |
| No underlying disease | Premature 32-36 weeks | Premature <32 weeks |
| Mild symptoms | Chronic lung disease | Congenital heart disease |
| Good oral intake | Feeding difficulties | Immunocompromised |
| SpO2 ≥94% | SpO2 90-93% | SpO2 <90% |

## Diagnostic Evaluation

**Routine Testing NOT Recommended:**
- Chest X-ray for typical bronchiolitis
- Complete blood count
- Serum electrolytes
- Viral panel for hospitalized patients (unless isolation concerns)

**Testing Considered When:**

*Chest X-ray:*
- Suspicion of pneumonia
- Pneumothorax suspected
- Cardiac disease consideration
- Atypical presentation (lobar consolidation, asymmetric findings)

*Viral Testing:*
- Cohorting decisions (hospital infection control)
- High-risk patients
- Atypical season
- Distinguishing from other diagnoses

*Blood Culture:*
- Fever >39°C (≥3 months) with ill appearance
- Toxic appearance
- Need for empiric antibiotics

**Physical Examination Pearls:**

*Palpation:*
- Check for subcutaneous air (suggests pneumothorax)
- Assess for tactile fremitus (decreased with obstruction)
- Liver position may be depressed (hyperinflation)

*Percussion:*
- Hyperresonant with air trapping
- Dullness suggests consolidation or effusion

*Auscultation:*
- Wheezing: Expiratory, may be absent if severe
- Crackles: May indicate atelectasis or viral pneumonia
- Breath sounds: Diminished if severe obstruction
- Transmission of upper airway sounds can mimic wheezing

## Management Protocols

**Home Management Criteria:**

*Can be discharged if:*
- Adequate hydration (≥50% normal feeds)
- Respiratory rate: <60 for age <6mo, <50 for 6-12mo
- SpO2 ≥90% on room air
- No apnea episodes
- Reliable caregivers
- Access to follow-up

*Discharge instructions:*
- Return precautions (worsening breathing, dehydration)
- Fever management
- Nasal saline and suctioning
- Feeding strategies
- Follow-up arrangements

**Inpatient Management:**

*Standard Care:*
- Nasal suctioning as needed
- Maintain hydration (oral, NG, or IV)
- Monitor SpO2 continuously or intermittently
- Oxygen for SpO2 <90%
- Cardiorespiratory monitoring

*Respiratory Support:*

| Support | Indication | Parameters |
|---------|-----------|------------|
| Room air | SpO2 ≥90% | Monitor |
| Low-flow oxygen | SpO2 85-89% | NC 1-2 L/min |
| High-flow NC | Moderate distress | Up to 2 L/kg/min, FiO2 21-100% |
| CPAP | Severe distress | 5-10 cm H2O |
| Mechanical ventilation | Respiratory failure | Intubate |
| ECMO | Refractory failure | Last resort |

**Dehydration Management:**
- Assess: Weight change, urine output, mucous membranes, fontanelle
- Calculate deficit and maintenance
- Replace deficit over 24 hours
- Maintenance: 100 mL/kg/day for <10 kg
- Replace ongoing losses

**Medication Considerations:**

*Bronchodilator Trial:*
- Consider for atypical history or family history of asthma
- Albuterol 2.5 mg via nebulizer
- Document pre- and post-treatment assessment
- Discontinue if no clear benefit

*Corticosteroid Trial:*
- Consider for severe disease with atopic history
- Prednisolone 1-2 mg/kg/day for 3-5 days
- Evidence limited, use selectively

**Antibiotics:**
- Indicated only for bacterial co-infection
- Otitis media: Amoxicillin
- Pneumonia: Based on likely pathogen
- Urinary tract infection: Consider catheterized specimen in febrile infants

## Complications and Management

**Apnea:**

*Epidemiology:*
- More common in <6 months
- More common in premature infants
- May be presenting symptom
- Occurs in up to 20% of hospitalized infants

*Management:*
- Observation with cardiorespiratory monitoring
- Consider caffeine citrate for recurrent apnea
- May require CPAP or mechanical ventilation

**Respiratory Failure:**
- Indications for intubation:
  - SpO2 <85% despite maximal oxygen
  - Rising PaCO2 with respiratory acidosis
  - Severe apnea
  - Respiratory fatigue
  - Altered mental status

**Pneumothorax:**
- Rare complication
- Suspect with sudden deterioration
- Diagnosis: Chest X-ray or transillumination
- Treatment: Chest tube for large pneumothorax

**Bacterial Superinfection:**
- Pneumonia: Consider if high fever, lobar consolidation
- Otitis media: Common, treat if symptomatic
- UTI: Screen in febrile infants

## Differential Diagnosis

**Conditions to Consider:**

| Condition | Distinguishing Features |
|-----------|-------------------------|
| Asthma | History of recurrent wheezing, atopy, bronchodilator response |
| Viral pneumonia | High fever, lobar consolidation, focal findings |
| Bacterial pneumonia | High fever, toxic appearance, lobar infiltrate |
| Heart failure | Cardiomegaly, hepatomegaly, crackles, edema |
| Foreign body aspiration | Sudden onset, unilateral findings, history of choking |
| Vascular ring | Chronic symptoms, positional stridor |
| Cystic fibrosis | Failure to thrive, recurrent infections, steatorrhea |

## Long-term Outcomes

**Post-Bronchiolitis Wheezing:**
- 30-50% develop recurrent wheezing
- Risk factors: Atopy, family history of asthma, severe RSV
- Most outgrow by school age
- May represent asthma phenotype unmasked by RSV

**Lung Function:**
- May have reduced lung function for several years
- Possible increased asthma risk
- No permanent lung damage in most
- Severe RSV: Possible persistent deficit

**Subsequent Hospitalizations:**
- Increased risk of subsequent respiratory hospitalizations
- Risk decreases with age
- Premature infants: Higher risk`,
      keyTerms: [
        { term: 'air trapping', definition: 'Air retained in lungs due to difficulty exhaling through narrowed airways' },
        { term: 'ventilation-perfusion mismatch', definition: 'Imbalance between air reaching alveoli and blood flow to alveoli' },
        { term: 'collateral ventilation', definition: 'Alternative pathways for air to reach alveoli; limited in infants' },
        { term: 'CPAP', definition: 'Continuous positive airway pressure; keeps airways open with constant pressure' },
      ],
      clinicalNotes: 'Premature infants and those with chronic lung disease are at high risk for severe RSV disease. Consider palivizumab prophylaxis according to AAP guidelines. Apnea may be the only sign in young infants with RSV.',
    },

    4: {
      level: 4,
      summary: 'Advanced bronchiolitis management requires understanding of pathophysiologic mechanisms, risk stratification, evidence-based use of respiratory support, appropriate diagnostic testing, and recognition of complications. Management is primarily supportive with specific interventions for high-risk populations.',
      explanation: `## Advanced Pathophysiology

**Cellular and Molecular Mechanisms:**

*Epithelial Injury:*
- RSV infects ciliated epithelial cells via G protein binding
- Syncytium formation (cell fusion)
- Cytotoxic T-cell response causes necrosis
- Denudation of epithelium

*Inflammatory Cascade:*

| Mediator | Role in Bronchiolitis |
|----------|---------------------|
| IL-8 | Neutrophil chemotaxis |
| IL-6 | Acute phase response |
| TNF-α | Fever, inflammation |
| Histamine | Bronchospasm in some |
| Leukotrienes | Bronchospasm, edema |
| Interferons | Antiviral response |

*Mucus Plugs:*
- Composed of necrotic epithelium, mucus, inflammatory cells
- Contain viral antigens and neutrophil extracellular traps (NETs)
- Cause complete airway obstruction
- Lead to atelectasis distal to obstruction

**Airway Dynamics:**
- Poiseuille's law: Resistance inversely proportional to radius⁴
- Small decrease in radius = large increase in resistance
- Infants have higher baseline resistance
- Less collateral ventilation (channels of Lambert, pores of Kohn)
- Air trapping leads to hyperinflation and flattening of diaphragm

**Genetic Susceptibility:**
- TLR4 polymorphisms: Impaired RSV recognition
- IL-4/IL-13 promoter variants: Th2 skewing
- Surfactant protein D variants: Impaired viral clearance
- CCR5Δ32: Possibly protective

## Advanced Assessment

**Biomarkers:**

*Research Use (Not Clinical Standard):*

| Biomarker | Significance |
|-----------|--------------|
| Nasal lavage IL-8 | Correlates with severity |
| Serum IL-6 | Predicts hospitalization |
| Urinary leukotriene E4 | Predicts wheezing |
| Exhaled NO | Lower in RSV vs. asthma |

**Pulse Oximetry Interpretation:**

*Age-Related Norms:*
- Neonates: Mean SpO2 97-100%
- Infants: Mean SpO2 97-100%
- Lower in sleep, during feeding

*RSV-Related Hypoxemia:*
- Usually mild (SpO2 90-94%)
- Due to V/Q mismatch, not shunt
- Improves with supplemental oxygen
- Target SpO2: ≥90% (acceptable, ≥94% optimal)

**Work of Breathing Assessment:**

*Components:*
- Elastic work: Overcoming reduced lung compliance
- Resistive work: Overcoming increased airway resistance
- Additional work: Increased respiratory rate

*Clinical Signs of Increased Work:*
- Nasal flaring
- Retractions (suprasternal, intercostal, subcostal, subxiphoid)
- Accessory muscle use (sternocleidomastoid, scalenes)
- Abdominal paradox (paradoxical breathing)
- Grunting

**Predictive Models for Severe Disease:**

*ESCORE (Early Severity Score):*
- Age <3 months
- Born <37 weeks gestation
- Oxygen saturation <94%
- Respiratory rate >60
- Poor oral intake
- Score 0-5 predicts admission

*Other Predictors:*
- RSV load (higher = more severe)
- Co-infection with multiple viruses
- Serum lactate dehydrogenase
- Nasal neutrophil count

## Evidence-Based Interventions

**High-Flow Nasal Cannola (HFNC):**

*Mechanism:*
- Flow-dependent: Delivers up to 2 L/kg/min
- Washs out anatomic dead space
- Provides low-level PEEP (2-5 cm H2O)
- Humidification reduces airway edema
- Improved comfort vs. traditional oxygen

*Evidence:*
- Reduces need for intubation vs. standard oxygen
- Shorter ICU stay vs. CPAP in some studies
- Better feeding tolerance
- Well tolerated by infants

*Indications:*
- SpO2 90-93% on 1-2 L/min
- Moderate respiratory distress
- Respiratory fatigue
- Poor feeding with respiratory effort

*Nasal Gastric Feeding with HFNC:*
- Usually tolerated
- Calm infant reduces oxygen demand
- Improves hydration

**Nebulized Hypertonic Saline:**

*Mechanism:*
- Osmotic effect draws water into airway lumen
- Hydrates mucus, improves clearance
- May reduce airway edema

*Evidence:*
- Small reduction in hospital length of stay (0.5 days)
- Improved clinical scores in some studies
- Not standard of care in most guidelines
- Reasonable for hospitalized patients

*Dose:*
- 3% saline, 4 mL via nebulization
- Given before chest physiotherapy (if used)
- Pre-treat with bronchodilator if wheezing

**Heliox (Helium-Oxygen Mixture):**

*Mechanism:*
- Lower density than air
- Reduces turbulent flow
- Decreases work of breathing

*Evidence:*
- Limited, mixed results
- May help in severe cases
- Not standard care

**Surfactant:**

*Consideration:*
- For severe RSV with respiratory failure
- Evidence from small trials
- Not standard care outside ICU
- Expensive

## Ventilator Management

**Non-Invasive Ventilation:**

*CPAP:*
- Indications: Moderate-severe distress
- Starting pressure: 5-7 cm H2O
- May reduce intubation rates
- Requires monitoring

*BiPAP:*
- Limited data in bronchiolitis
- Consider for CPAP failure
- Higher pressures may improve ventilation

**Mechanical Ventilation Strategy:**

*Indications:*
- SpO2 <85% despite HFNC/CPAP
- Rising PaCO2 >60 with pH <7.25
- Recurrent apnea
- Respiratory fatigue
- Altered mental status

*Ventilator Settings:*
- Pressure-control ventilation preferred
- PIP: 20-25 cm H2O (adjust for adequate tidal volume)
- PEEP: 4-6 cm H2O
- Rate: 20-30/min
- FiO2: Titrate to SpO2 ≥90%
- Permissive hypercapnia acceptable (PaCO2 50-60)

*Weaning:*
- Extubate when: SpO2 stable on FiO2 ≤0.4, PIP ≤18, minimal support
- Consider post-extubation HFNC or CPAP
- Monitor for re-intubation

## Special Populations

**Congenital Heart Disease:**
- RSV increases morbidity and mortality
- Pulmonary overcirculation worsens respiratory status
- Diuretics may help if edema present
- Consider early respiratory support
- Palivizumab indicated for cyanotic lesions or on pulmonary medications

**Chronic Lung Disease / BPD:**
- Increased risk of severe RSV
- May require baseline oxygen
- Palivizumab indicated for <2 years, on oxygen/medications
- May need longer hospital stay
- Consider home oxygen on discharge

**Immunocompromised:**
- Higher risk of severe disease
- Prolonged viral shedding
- Higher mortality
- Consider broader differential
- Palivizumab indicated for <24 months with significant immunocompromise

**Cystic Fibrosis:**
- RSV may accelerate lung function decline
- Consider more aggressive management
- Airway clearance therapies important
- May benefit from hospitalization even with mild symptoms

## Complications Management

**Apnea Management:**

*Risk Assessment:*
- Highest risk: <6 months, especially premature
- Monitor cardiorespiratory for 24-48 hours
- May occur without preceding respiratory distress

*Treatment:*
- Caffeine citrate: 20 mg/kg loading, 5 mg/kg/day maintenance
- CPAP for recurrent apnea
- Mechanical ventilation for severe apnea

**Pneumothorax/Pneumomediastinum:**

*Risk Factors:*
- Severe air trapping
- Mechanical ventilation (especially high PIP)
- Aggressive bag-mask ventilation

*Diagnosis:*
- Chest X-ray confirmatory
- Transillumination (for pneumothorax in infants)
- Consider if sudden deterioration

*Treatment:*
- Small pneumothorax: Observation, supplemental oxygen
- Moderate-large: Chest tube
- Pneumomediastinum: Usually observation

**Post-Bronchiolitis Asthma:**

*Risk Assessment:*
- Family history of atopy/asthma
- Personal history of atopic dermatitis
- Elevated IgE
- Persistent wheezing beyond 3 years

*Management:*
- Consider asthma evaluation
- May respond to asthma medications
- Not all recurrent wheezers develop asthma

**Secondary Bacterial Infection:**

*Timing:*
- Usually occurs days 5-7 of illness
- Consider if worsening after initial improvement
- Fever recurrence or new high fever

*Pathogens:*
- Streptococcus pneumoniae
- Staphylococcus aureus
- Haemophilus influenzae

*Treatment:*
- Antibiotics based on likely pathogen
- Repeat chest X-ray if concern`,
      keyTerms: [
        { term: 'NETs', definition: 'Neutrophil extracellular traps; webs of DNA that contribute to mucus plug formation' },
        { term: 'channels of Lambert', definition: 'Small collateral airway connections between bronchioles in adults; limited in infants' },
        { term: 'paradoxical breathing', definition: 'Abdomen moves out while chest moves in during inspiration; sign of respiratory distress' },
      ],
      clinicalNotes: 'HFNC has transformed bronchiolitis management, reducing intubation rates. Starting HFNC earlier (SpO2 90-93%) may prevent progression to respiratory failure. Nasal gastric feeds are well tolerated with HFNC.',
    },

    5: {
      level: 5,
      summary: 'Expert-level bronchiolitis management integrates understanding of viral pathogenesis, host immune responses, precision risk stratification, evidence-based respiratory support strategies, recognition of complications, and individualized care for special populations including long-term follow-up.',
      explanation: `## Molecular Virology

**RSV Structure and Lifecycle:**

*Viral Components:*
- Enveloped, single-stranded RNA virus (-)
- Two surface glycoproteins:
  - G protein: Attachment to host cell
  - F protein: Fusion (syncytium formation)
- SH protein: Ion channel function

*Cell Entry:*
- G protein binds to CX3CR1 receptor (or heparan sulfate)
- F protein mediates fusion with cell membrane
- Syncytium formation: Cell-cell fusion creates multinucleated giant cells

*Replication:*
- Cytoplasmic replication
- Budding from cell membrane
- Cell lysis or release via budding

**Strain Variability:**
- Two antigenic subgroups: A and B
- Subgroup A: Generally more severe
- Genotypes vary geographically and temporally
- Reinfection possible (incomplete immunity)

**Host-Pathogen Interactions:**

*Innate Immune Response:*
- TLR4 recognizes RSV F protein
- TLR2/6 recognize RSV proteins
- NF-κB activation → cytokine production
- Type I interferons (IFN-α/β): Antiviral response

*Adaptive Immune Response:*
- CD8+ T-cells: Viral clearance but also immunopathology
- CD4+ Th2 response: Associated with wheezing/asthma
- IgE production: Some infants develop RSV-specific IgE
- Immunological memory: Incomplete, reinfections common

## Precision Medicine Approaches

**Biomarker Development:**

*Predictive Biomarkers:*
- Nasal cytokine signature (IL-8, IL-13)
- Gene expression profiling of blood
- Proteomic signatures
- Metabolomic profiles

*Severity Prediction:*
- Viral load: Higher load = more severe (controversial)
- Host response markers more predictive than viral load
- Combined viral-host models most accurate

**Pharmacogenomics:**
- β2-adrenergic receptor polymorphisms affect albuterol response
- TLR4 variants affect immune response
- ADRB2 genotype may predict steroid responsiveness

**Risk Stratification Algorithms:**
- Integrate clinical, lab, genetic factors
- Machine learning approaches
- Real-time clinical decision support
- Research stage currently

## Therapeutics Pipeline

**Antiviral Agents:**

*Ribavirin:*
- Aerosolized antiviral
- Limited efficacy, high cost, toxicity
- Rarely used, reserved for severe cases in immunocompromised
- Not standard of care

*RSV Monoclonal Antibodies:*
- Palivizumab: Prophylaxis (not treatment)
- Nirsevimab: Extended half-life, single dose (under investigation)

*Fusion Inhibitors:*
- Presatovir: Oral fusion inhibitor
- Trials: Mixed results, not yet approved

*Polymerase Inhibitors:*
- ALS-008176: Oral RSV polymerase inhibitor
- Early phase trials

**Anti-Inflammatory Strategies:**

*Corticosteroid Controversy:*
- Systematic reviews: No clear benefit
- Subgroup analysis: May benefit atopic individuals
- Pharmacogenomics: ADRB2 genotype may predict response
- Current: Not recommended for routine use

*Montelukast:*
- Leukotriene receptor antagonist
- Limited evidence for benefit
- Some reduction in recurrent wheezing
- Not standard care

*Macrolides:*
- Azithromycin: Anti-inflammatory properties
- Small trials: Possible reduction in duration
- Concern: Antibiotic resistance
- Not recommended routinely

## Respiratory Support Evolution

**High-Flow Nasal Cannola Optimization:**

*Flow Selection:*
- Start: 1-2 L/kg/min (max 25 L/min total)
- Titrate to work of breathing and SpO2
- Most infants: 8-12 L/min effective
- Higher flows not necessarily better

*Weaning:*
- Reduce by 1-2 L/kg/min every 12-24 hours
- To room air before discharge
- Most infants wean within 24-48 hours

*Failure Predictors:*
- Age <1 month
- Prematurity <32 weeks
- Need for >1.5 L/kg/min
- PaCO2 >50 on blood gas

**Non-Invasive Ventilation Advances:**

*HFNC vs. CPAP:*
- Meta-analysis: Similar efficacy
- HFNC: Better tolerated, easier to use
- CPAP: Slightly higher pressures possible
- Practice varies by institution

*NIV-NAVA (Neurally Adjusted Ventilatory Assist):*
- EDI signal from diaphragm
- Synchronizes with infant's breathing effort
- Research use currently

## ICU Management

**Sedation Considerations:**
- Minimize to avoid respiratory depression
- Consider for intubated infants
- Dexmedetomidine: Preferred (less respiratory depression)
- Benzodiazepines: Use cautiously

**Ventilator Strategies:**

*Permissive Hypercapnia:*
- Accept PaCO2 up to 60-65 mm Hg
- Avoids volutrauma/barotrauma
- Permissive respiratory acidosis (pH >7.20)

*Open Lung Ventilation:*
- Adequate PEEP to prevent atelectasis
- Recruitment maneuvers in selected cases
- Avoid overdistention

**ECMO Considerations:**
- Rescue therapy for refractory respiratory failure
- Indicated if: PaO2/FiO2 <100 despite maximal support
- Mortality: 30-40% in RSV requiring ECMO
- Limited centers with expertise

## Post-Acute Care

**Bronchiolitis Follow-up Clinic:**

*Indications:*
- Prematurity <32 weeks
- Chronic lung disease
- Severe disease requiring ICU
- Recurrent wheezing episodes

*Assessment:*
- Symptom review
- Physical examination
- Growth monitoring
- Developmental assessment
- Respiratory status

**Long-Term Respiratory Outcomes:**

*Post-Bronchiolitis Asthma:*
- 30-40% develop recurrent wheezing
- Risk factors for persistence:
  - Atopy (eczema, food allergy)
  - Family history of asthma
  - IgE sensitization
  - Severe RSV illness
  - Reduced lung function at baseline

*Lung Function:*
- Some: Persistent reduction in FEV0.5
- May normalize by adolescence
- Severe RSV: Possible persistent deficit
- Airway hyperresponsiveness common

**Neurodevelopmental Outcomes:**

*Concerns:*
- Hypoxia potential effect on developing brain
- Some studies: Increased risk of neurodevelopmental delay
- Confounding factors present

*Current Evidence:*
- Most severe cases may have some delay
- Usually mild
- May catch up over time
- Severe RSV with hypoxia: Close monitoring

## Prevention Strategies

**Vaccines Under Development:**

*Maternal Vaccination:*
- RSV F protein vaccine in pregnancy
- Transplacental antibody transfer
- Phase 3 trials ongoing
- Promising early results

*Pediatric Vaccines:*
- Live-attenuated intranasal vaccine
- Subunit vaccines
- Nanoparticle vaccines
- All in development

**Extended Half-Life Monoclonal Antibodies:**
- Nirsevimab: Single dose for entire RSV season
- Phase 3 trials: Significant reduction in RSV hospitalization
- May replace palivizumab in future
- Broader indications possible

**Environmental Prevention:**
- Hand hygiene remains most important
- Mask-wearing by caregivers during illness
- Surface decontamination
- Ventilation improvements
- Limiting exposures during peak season

## Health Systems Optimization

**Clinical Pathways:**
- Standardized assessment tools
- Evidence-based order sets
- Discharge criteria
- Reducing unnecessary interventions

**Quality Metrics:**
- Chest X-ray utilization (aim: <20%)
- Bronchodilator use (aim: <30%)
- Antibiotic use (aim: <10% unless co-infection)
- Length of stay
- Readmission rate
- ICU transfer rate

**Cost Considerations:**
- RSV cost burden: >$500 million annually (US)
- Hospitalization: Majority of cost
- Palivizumab cost: High but cost-effective for high-risk
- Unnecessary testing adds cost without benefit

## Global Health Perspective

**Burden of Disease:**
- 33 million cases annually worldwide
- 3 million hospitalizations
- 60,000-200,000 deaths (mostly developing countries)
- Second leading cause of infant death (after malaria)

**Resource-Limited Settings:**
- Limited access to oxygen
- Limited ICU capacity
- Higher mortality
- Low-cost interventions needed
- Prevention critical`,
      keyTerms: [
        { term: 'syncytium', definition: 'Multinucleated giant cell formed by fusion of RSV-infected cells' },
        { term: 'CX3CR1', definition: 'Chemokine receptor on respiratory epithelium; binds RSV G protein for cell entry' },
        { term: 'presatovir', definition: 'Oral RSV fusion inhibitor; investigational antiviral' },
        { term: 'nirsevimab', definition: 'Extended half-life monoclonal antibody against RSV; single dose for prevention' },
      ],
      clinicalNotes: `Expert Practice Pearls:

1. **Risk Stratification:** Use ESCORE or similar tool to identify high-risk infants. Premature <32 weeks, <3 months age, and SpO2 <94% are key predictors of severe disease.

2. **HFNC:** Start early for moderate respiratory distress (SpO2 90-93%, RR >50). Nasogastric feeds well tolerated; improves hydration and reduces calorie expenditure.

3. **Avoid Harm:** Routine bronchodilators, steroids, chest X-rays, and antibiotics NOT recommended for typical bronchiolitis. Testing and treating increase cost without benefit.

4. **Apnea:** Highest risk in <6 months, especially premature. Monitor cardiorespiratory for 24-48 hours. Caffeine citrate for recurrent apnea.

5. **Discharge:** Safe to discharge when SpO2 ≥90% on room air, feeding ≥50% normal, respiratory rate improved, no apnea for 24 hours, and reliable caregivers.

6. **Follow-up:** High-risk infants (severe disease, premature, CLD) benefit from post-bronchiolitis clinic. Monitor for recurrent wheezing and growth.`,
    },
  },

  media: [
    {
      id: 'bronchiolitis-pathophysiology',
      type: 'diagram',
      filename: 'bronchiolitis-pathophysiology.svg',
      title: 'Bronchiolitis Pathophysiology',
      description: 'Mechanism of airway obstruction in bronchiolitis',
    },
    {
      id: 'bronchiolitis-severity',
      type: 'diagram',
      filename: 'bronchiolitis-severity.svg',
      title: 'Bronchiolitis Severity Assessment',
      description: 'Clinical features by severity level',
    },
  ],

  citations: [
    {
      id: 'aap-bronchiolitis-guidelines-2014',
      type: 'article',
      title: 'Diagnosis and Management of Bronchiolitis: Clinical Practice Guideline',
      authors: ['Ralston, S.L.', 'et al.'],
      source: 'Pediatrics',
      url: 'https://doi.org/10.1542/peds.2014-2742',
      accessedDate: '2026-01-26',
    },
    {
      id: 'rsv-prophylaxis-guidelines-2023',
      type: 'article',
      title: 'Updated Guidance for Palivizumab Prophylaxis Among Infants and Young Children at Increased Risk of Hospitalization for RSV',
      authors: ['American Academy of Pediatrics Committee on Infectious Diseases'],
      source: 'Pediatrics',
      url: 'https://doi.org/10.1542/peds.2023-065890',
      accessedDate: '2026-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'system-respiratory', targetType: 'system', relationship: 'related', label: 'Respiratory System' },
    { targetId: 'condition-pediatric-asthma', targetType: 'condition', relationship: 'sibling', label: 'Asthma' },
    { targetId: 'condition-rsv', targetType: 'condition', relationship: 'related', label: 'RSV Infection' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['pediatrics', 'viral infection', 'respiratory distress', 'RSV'],
    keywords: ['bronchiolitis', 'RSV', 'wheezing', 'respiratory distress', 'viral pneumonia', 'high-flow nasal cannula'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'family-medicine'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default bronchiolitis;
